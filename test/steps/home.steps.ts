import {Given, Then} from '@cucumber/cucumber'

Given(/^I open the browser and load the url (.+)$/, async function (homepageurl) {
    await browser.url(homepageurl)
    await browser.maximizeWindow()
});

Then(/^I should see a header with text (.+)$/, async function (headertext) {
    const header = await $('.heading')
    expect(await header.getText()).toEqual(headertext)
});