import { Given, When, Then } from '@cucumber/cucumber'
import waitexpage from "src/pages/waitex.page"
import assertions from 'src/utils/assertions';

Given(/^I am on dynamic loading (.+) page$/, async (appurl: string) => {
    await browser.maximizeWindow()
    await browser.url(appurl)
});

When(/^I click on start button$/, async () => {
    await waitexpage.startBtn.click()
});

Then(/^I validate loading icon$/, async () => {
    await waitexpage.loadingIco.waitForDisplayed({ timeout: 5000, timeoutMsg: '' })
    await waitexpage.loadingIco.waitForDisplayed({ reverse: true, timeout: 10000 })
    await waitexpage.msg.waitForDisplayed({ timeout: 10000 })
    await browser.waitUntil(async () => await waitexpage.msg.getText() === 'Hello World!', {
        timeout: 10000,
        timeoutMsg: "Element is not displayed in 10 sec"
    })
    await assertions.toBeDisplayed(waitexpage.msg)
})