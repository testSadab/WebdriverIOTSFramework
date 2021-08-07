import { Given, When, Then } from '@cucumber/cucumber'

Given(/^I am on dynamic loading (.+) page$/, async (appurl: string) => {
    await browser.maximizeWindow()
    await browser.url(appurl)
});

When(/^I click on start button$/, async () => {
    const startBtn = $('#start button')
    await (await startBtn).click()
});

Then(/^I validate loading icon$/, async () => {
    const loadingIco = $('#loading')
    const msg = $('#finish h4')

    await (await loadingIco).waitForDisplayed({timeout: 5000, timeoutMsg: ''})
    await (await loadingIco).waitForDisplayed({reverse: true, timeout: 10000})
    await (await msg).waitForDisplayed({timeout: 10000})
    await browser.waitUntil( async ()=> await (await msg).getText() ==='Hello World!', {
        timeout: 10000,
        timeoutMsg: "Element is not displayed in 10 sec"
    })
    await expect(msg).toBeDisplayed()
})