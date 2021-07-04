import Page from '../pageobjects/page'

class ChaiRegister extends Page {

    get header() { return $("//h1"); }
    get fname() { return $('[name=firstname]') }
    get lname() { return $('[name=lastname]') }
    get gender_radio() { return $$('[name=sex]') }
    get experience_radio() { return $$('[name=exp]') }
    get favchai_checkbox() { return $$('input[name*=Tea]') }
    get whychai_checkbox() { return $$('[name=tool]') }
    get continent_dropdown() { return $('#continents') }
    get selCommands_multiselect() { return $('#selenium_commands') }
    get submit_btn() { return $('#submit') }


    async selectDropdown(element:WebdriverIO.ElementArray, value:string) {
        for (let i = 0; i < element.length; i++) {
            const elem = await (element[i]).getAttribute('value');
            if (elem === value) {
                await (element[i]).click()
                break;
            }
        }
    }


}
export default new ChaiRegister()