import { Given, When, Then } from '@cucumber/cucumber'
import { BASE_URI } from 'src/config/APIConfig';
import UsersPage from 'src/pages/Users.page';
import supertest from 'supertest'
import { APICalls } from 'src/enums/APICalls';
import assertions from 'src/utils/assertions';
import { addLog } from 'src/utils/commands';

const request = supertest(BASE_URI)
let response: supertest.Response;

const payload = {
    "name": "sadab",
    "job": "tester"
}

Given(/^I am on page (.+)$/, async (pageurl: string) => {
    await UsersPage.openApp(pageurl);
});

When(/^I perform (.+) user search$/, async (endpoint: string) => {
    await UsersPage.selectMethod(APICalls.GET)
    await UsersPage.enterAPIUrl(BASE_URI + endpoint);
    await UsersPage.clickOnAjaxBtn();
})

When(/^I make GET (.+) api call$/, async (endpoint: string) => {
    response = await request.get(endpoint)
    addLog(`GET api call to endpoint: ${endpoint}`)
})

Then(/^I validate the search result$/, async () => {
    const ui_status = await UsersPage.getStatusText();
    const ui_response = JSON.parse(await UsersPage.getOutputText());

    assertions.toContain(ui_status, response.statusCode.toString())
    assertions.toEqual(JSON.stringify(ui_response), JSON.stringify(response.body))
    assertions.toEqual(ui_response.data.email, response.body.data.email)
})


When(/^I perform create use search for api (.+)$/, async (service: string) => {
    await UsersPage.selectMethod(APICalls.POST)
    await UsersPage.enterAPIUrl(BASE_URI + service);
    await UsersPage.clickOnAddParamBtn()
    await UsersPage.enterFirstParams("name", payload.name)
    await UsersPage.clickOnAddParamBtn()
    await UsersPage.enterSecondParams("job", payload.job)
    await UsersPage.clickOnAjaxBtn();
})

When(/^I make POST (.+) api call$/, async (endpoint: string) => {
    response = await request
        .post(endpoint)
        .send(payload)
        .set('content-type', 'application/json');
    addLog(`POST api call to endpoint: ${endpoint}`)
})

Then(/^I validate the create user search result$/, async () => {
    const ui_status = await UsersPage.getStatusText();
    const ui_response = JSON.parse(await UsersPage.getOutputText());

    assertions.toContain(ui_status, response.statusCode.toString())
    assertions.toEqual(ui_response.name, response.body.name)
    assertions.toEqual(ui_response.job, response.body.job)
})
