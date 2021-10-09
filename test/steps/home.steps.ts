import { Given, Then } from '@cucumber/cucumber'
import assertions from 'src/utils/assertions';

Given(/^I open the browser and load the url (.+)$/, async (homepageurl: string) => {
    await browser.url(homepageurl)
    await browser.maximizeWindow()
});

Then(/^I should see a header with text (.+)$/, async (headertext: string) => {
    const header = $('.heading')
    await assertions.toHaveText(header, headertext)
});