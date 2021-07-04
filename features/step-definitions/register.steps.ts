import { Given, When, Then } from '@cucumber/cucumber'
import chaiPage from '../pageobjects/register.page'

Given(/^I am on practice page \"([^\"]*)\"$/, async (appurl: string) => {
    await browser.maximizeWindow()
    await browser.url(appurl)
});

Then(/^I validat page header \"([^\"]*)\"$/, async (header: string) => {
    await expect(chaiPage.header).toHaveText(header)
});

When(/^I enter firstname (.+) and lastname (.+)$/, async (fname: string, lname: string) => {
    await (await chaiPage.fname).setValue(fname)
    await (await chaiPage.lname).setValue(lname)
});

When(/^I select gender (.+) years (.+) favorite chai (.+) and reason (.+)$/, async (gender: string, yrs: string, favchai: string, reason: string) => {
    await chaiPage.selectDropdown(await chaiPage.gender_radio, gender)
    await chaiPage.selectDropdown(await chaiPage.experience_radio, yrs)
    await chaiPage.selectDropdown(await chaiPage.favchai_checkbox, favchai)
    await chaiPage.selectDropdown(await chaiPage.whychai_checkbox, reason)
});

When(/^I select continent (.+) and commands (.+)$/, async (continent: string, command: string) => {
    await (await chaiPage.continent_dropdown).selectByVisibleText(continent)
    await (await chaiPage.selCommands_multiselect).selectByVisibleText(command)
});

When(/^I click on submit button$/, async () => {
    await (await chaiPage.submit_btn).click()
});
