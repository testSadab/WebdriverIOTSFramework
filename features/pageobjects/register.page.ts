import Page from '../pageobjects/page'

class ChaiRegister extends Page {

    private get header() { return $("//h1"); }
    private get fname() { return $('[name=firstname]') }
    private get lname() { return $('[name=lastname]') }
    private get gender_radio() { return $$('[name=sex]') }
    private get experience_radio() { return $$('[name=exp]') }
    private get favchai_checkbox() { return $$('input[name*=Tea]') }
    private get whychai_checkbox() { return $$('[name=tool]') }
    private get continent_dropdown() { return $('#continents') }
    private get selCommands_multiselect() { return $('#selenium_commands') }
    private get submit_btn() { return $('#submit') }

    getHeader() {
        return this.header
    }

    async selectDropdown(element:WebdriverIO.ElementArray, value:string) {
        for (let i = 0; i < element.length; i++) {
            const elem = await (element[i]).getAttribute('value');
            if (elem === value) {
                await (element[i]).click()
                break;
            }
        }
    }

    async enterFirstName(firstname:string) {
        await (await this.fname).setValue(firstname)
    }

    async enterLastName(lastname:string) {
        await (await this.lname).setValue(lastname)
    }

    async selectGender(gender: string) {
        await this.selectDropdown(await this.gender_radio, gender)
    }

    async selectExperience(years: string) {
        await this.selectDropdown(await this.experience_radio, years)
    }

    async selectFavChai(chaiType: string) {
        await this.selectDropdown(await this.favchai_checkbox, chaiType)
    }

    async selectReason(reason:string) {
        await this.selectDropdown(await this.whychai_checkbox, reason)
    }

    async selectContinent(continent:string) {
        await (await this.continent_dropdown).selectByVisibleText(continent)
    }

    async selectSeleniumCommand(command:string) {
        await (await this.selCommands_multiselect).selectByVisibleText(command)
    }

    async clickOnSubmitBtn() {
        await (await this.submit_btn).click()
    }



}
export default new ChaiRegister()