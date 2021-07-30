import { Given, Then } from '@cucumber/cucumber'

Given(/^I open app url$/, async () => {
    await browser.maximizeWindow()
    await browser.url('/')
});

Then(/^I retrieve browser title$/, async () => {
    const title = await browser.getTitle()
    console.log("Application Title: ", title)
});
