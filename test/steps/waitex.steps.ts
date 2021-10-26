import { Given, When, Then } from '@cucumber/cucumber'
import waitexpage from "src/pages/waitex.page"
import assertions from 'src/utils/assertions';
import { addLog } from 'src/utils/commands';

Given(/^I am on dynamic loading (.+) page$/, async (appurl: string) => {
    await browser.maximizeWindow()
    addLog("Maximizing window")
    await browser.url(appurl)
    addLog(`Loading URL: ${appurl}`)
});

When(/^I click on start button$/, async () => {
    await waitexpage.clickOnStartButton()
});

Then(/^I validate loading icon$/, async () => {
    await waitexpage.waitForLoadingIcon();
    await waitexpage.waitForLoadingIconToDisappear();
    await waitexpage.waitForMessage();
    await browser.waitUntil(async () =>
        await waitexpage.msg.getText() === 'Hello World!',
        {
            timeout: 10000,
            timeoutMsg: "Element is not displayed in 10 sec"
        })
    await assertions.toBeDisplayed(waitexpage.msg)
})