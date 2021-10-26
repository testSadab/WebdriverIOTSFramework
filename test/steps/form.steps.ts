import {Given, When, Then} from "@cucumber/cucumber"
import formPage from "src/pages/form.page"
import formdata from "test/resources/formdata.json";
import { parseJsonFile } from "src/utils/fileutils";
import { RESOURCE_FOLDER_PATH } from "src/constants/pathconst";
import { addLog } from "src/utils/commands";

Given("I am on form page {string}", async(pageurl:string)=> {
    await browser.url(pageurl);
    addLog(`Loading URL: ${pageurl}`)
    await browser.maximizeWindow();
    addLog("Maximizing window")
})

When("I enter all mandate fields", async()=> {
    await formPage.setnames(formdata.firstname, formdata.lastname);
    await formPage.setEmail(formdata.email)
    await formPage.setMobileNumber(formdata.mobileno)
    await formPage.setSubject(formdata.subject)
})

When(/^I enter all mandate fields from (.+)$/, async(file:string)=> {
    let testdata = parseJsonFile(RESOURCE_FOLDER_PATH+file);
    await formPage.setnames(testdata.firstname, testdata.lastname);
    await formPage.setEmail(testdata.email)
    await formPage.setMobileNumber(testdata.mobileno)
    await formPage.setSubject(testdata.subject)
})