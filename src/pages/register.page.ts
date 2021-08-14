import { click, selectDropdown, selectVisibleText, setText } from 'src/utils/commands';
import Page from './page'

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

    async enterFirstName(firstname:string) {
        await setText(this.fname, firstname)
    }

    async enterLastName(lastname:string) {
        await setText(this.lname, lastname)
    }

    async selectGender(gender: string) {
        await selectDropdown(this.gender_radio, gender)
    }

    async selectExperience(years: string) {
        await selectDropdown(this.experience_radio, years)
    }

    async selectFavChai(chaiType: string) {
        await selectDropdown(this.favchai_checkbox, chaiType)
    }

    async selectReason(reason:string) {
        await selectDropdown(this.whychai_checkbox, reason)
    }

    async selectContinent(continent:string) {
        await selectVisibleText(this.continent_dropdown, continent)
    }

    async selectSeleniumCommand(command:string) {
        await selectVisibleText(this.selCommands_multiselect, command)
    }

    async clickOnSubmitBtn() {
        await click(this.submit_btn)
    }

}
export default new ChaiRegister()