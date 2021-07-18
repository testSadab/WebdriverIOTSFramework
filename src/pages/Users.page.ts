import { click, setText } from "../utils/commands";
import Page from "./page";

class UsersPage extends Page {

    private get url_textbox() { return $('#urlvalue'); }
    private get ajax_btn() { return $('#submitajax'); }
    private get success_elem() { return $('.alert-success'); }
    private get status_text() { return $('#statuspre'); }
    private get output_area() { return $('#outputpre'); }

    async openApp(pageurl: string) {
        await browser.url(pageurl)
    }
    
    async enterAPIUrl(apiendpoint: string) {
        await setText(this.url_textbox, apiendpoint)
    }

    async clickOnAjaxBtn() {
        await click(this.ajax_btn)
    }

    async getStatusText(): Promise<string> {
        await (await this.success_elem).waitForDisplayed();
        return (await this.status_text).getText()
    }

    async getOutputText(): Promise<string> {
        return (await this.output_area).getText()
    }

}
export default new UsersPage()