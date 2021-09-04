import { When, Then } from "@cucumber/cucumber";

When(/^I click on first file$/, async ()=> {
    const fileElement = $("//a[contains(@href, 'download')]");
    await fileElement.click();
    await browser.pause(6000);
})