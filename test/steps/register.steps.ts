import { Given, When, Then } from '@cucumber/cucumber'
import chaiPage from 'src/pages/register.page'
import assertions from 'src/utils/assertions';
import { addLog } from 'src/utils/commands';

Given(/^I am on practice page \"([^\"]*)\"$/, async (appurl: string) => {
    await browser.maximizeWindow()
    addLog('Maximizing window')
    await browser.url(appurl)
    addLog('loading URL: ' + appurl)
});

Then(/^I validat page header \"([^\"]*)\"$/, async (header: string) => {
    await assertions.toHaveText(chaiPage.getHeader(), header)
});

When(/^I enter firstname (.+) and lastname (.+)$/, async (fname: string, lname: string) => {
    await chaiPage.enterFirstName(fname)
    await chaiPage.enterLastName(lname)
});

When(/^I select gender (.+) years (.+) favorite chai (.+) and reason (.+)$/, async (gender: string, yrs: string, favchai: string, reason: string) => {
    await chaiPage.selectGender(gender)
    await chaiPage.selectExperience(yrs)
    await chaiPage.selectFavChai(favchai)
    await chaiPage.selectReason(reason)
});

When(/^I select continent (.+) and commands (.+)$/, async (continent: string, command: string) => {
    await chaiPage.selectContinent(continent)
    await chaiPage.selectSeleniumCommand(command)
});

When(/^I click on submit button$/, async () => {
    await chaiPage.clickOnSubmitBtn()
});
