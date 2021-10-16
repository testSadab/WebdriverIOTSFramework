import { APICalls } from "src/enums/APICalls";
import { addLog, click, selectVisibleText, setText } from "src/utils/commands";
import Page from "./page";

class UsersPage extends Page {

    private get url_textbox() { return $('#urlvalue'); }
    private get ajax_btn() { return $('#submitajax'); }
    private get success_elem() { return $('.alert-success'); }
    private get status_text() { return $('#statuspre'); }
    private get output_area() { return $('#outputpre'); }

    private get method_dropdown() { return $('#httpmethod') }
    private get addParam_Btn() { return $('#addprambutton') }
    
    private get paramName1_textbox() { 
        return $("//div[@id='allparameters']//input[contains(@class,'fakeinputname') and @value]") 
    }
    private get paramValue1_textbox() { 
        return $("//div[@id='allparameters']//input[contains(@class,'realinputvalue') and @value]") 
    }
    private get paramName2_textbox() { 
        return $("(//div[@id='allparameters']//input[contains(@class,'fakeinputname') and @value])[2]") 
    }
    private get paramValue2_textbox() { 
        return $("(//div[@id='allparameters']//input[contains(@class,'realinputvalue') and @value])[2]") 
    }

    async openApp(pageurl: string) {
        await browser.url(pageurl)
        addLog(`Opening ${pageurl}`)
        await browser.maximizeWindow();
        addLog("Maximizing window")
    }
    
    async enterAPIUrl(apiendpoint: string) {
        await setText(this.url_textbox, apiendpoint)
    }

    async clickOnAjaxBtn() {
        await click(this.ajax_btn)
    }

    async getStatusText(): Promise<string> {
        await this.success_elem.waitForDisplayed();
        return this.status_text.getText()
    }

    async getOutputText(): Promise<string> {
        return this.output_area.getText()
    }

    async selectMethod(apiType: APICalls) {
        await selectVisibleText(this.method_dropdown, apiType)
    }

    async clickOnAddParamBtn() {
        await click(this.addParam_Btn)
    }

    async enterFirstParams(key: string, value:string) {
        await setText(this.paramName1_textbox, key)
        await setText(this.paramValue1_textbox, value)
    }

    async enterSecondParams(key: string, value:string) {
        await setText(this.paramName2_textbox, key)
        await setText(this.paramValue2_textbox, value)
    }

}
export default new UsersPage()