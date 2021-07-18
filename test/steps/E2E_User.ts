import { Given, When, Then } from '@cucumber/cucumber'
import { BASE_URI } from '../../src/config/APIConfig';
import UsersPage from '../../src/pages/Users.page';
import supertest from 'supertest'

const request = supertest(BASE_URI)
let api_response: any;
let api_statusCode: any;

Given(/^I am on page (.+)$/, async (pageurl: string) => {
    await UsersPage.openApp(pageurl);
});

When(/^I perform (.+) user search$/, async (endpoint: string) => {
    await UsersPage.enterAPIUrl(BASE_URI + endpoint);
    await UsersPage.clickOnAjaxBtn();
})

When(/^I make GET (.+) api call$/, async (endpoint: string) => {
    const response = await request.get(endpoint)
    
    api_response = response.body
    api_statusCode = response.statusCode
})

Then(/^I validate the search result$/, async () => {
    const ui_status = await UsersPage.getStatusText();
    const ui_response = JSON.parse(await UsersPage.getOutputText());

    expect(ui_status).toContain(api_statusCode)
    expect(ui_response).toEqual(api_response)
    expect(ui_response.data.email).toEqual(api_response.data.email)
})
