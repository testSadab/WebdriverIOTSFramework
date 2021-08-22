import {Given, When, Then} from "@cucumber/cucumber"
import formPage from "src/pages/form.page"
import formdata from "test/resources/formdata.json";
import fs from 'fs'

Given("I am on form page {string}", async(pageurl:string)=> {
    await browser.url(pageurl);
    await browser.maximizeWindow();
})

When("I enter all mandate fields", async()=> {
    await formPage.setnames(formdata.firstname, formdata.lastname);
    await formPage.setEmail(formdata.email)
    await formPage.setMobileNumber(formdata.mobileno)
    await formPage.setSubject(formdata.subject)
    await browser.pause(5000)
})

When(/^I enter all mandate fields from (.+)$/, async(datapath:string)=> {
    let data = fs.readFileSync(datapath, "utf-8");
    let testdata = JSON.parse(data)
    
    await formPage.setnames(testdata.firstname, testdata.lastname);
    await formPage.setEmail(testdata.email)
    await formPage.setMobileNumber(testdata.mobileno)
    await formPage.setSubject(testdata.subject)
    await browser.pause(5000)
})