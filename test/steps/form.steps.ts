import {Given, When, Then} from "@cucumber/cucumber"
import formPage from "src/pages/form.page"
import formdata from "test/resources/formdata.json";

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

When("Submits the form", async()=> {

})

Then("I should see {string}", async(message:string)=> {

})