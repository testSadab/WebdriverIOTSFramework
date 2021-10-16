import { Given, Then } from '@cucumber/cucumber'
import assertions from 'src/utils/assertions';
import { addLog } from 'src/utils/commands';

Given(/^I open the browser and load the url (.+)$/, async (homepageurl: string) => {
    await browser.url(homepageurl)
    addLog(`Loading URL: ${homepageurl}`)
    await browser.maximizeWindow()
    addLog("Maximizing window")
});

Then(/^I should see a header with text (.+)$/, async (headertext: string) => {
    const header = $('.heading')
    await assertions.toHaveText(header, headertext)
});