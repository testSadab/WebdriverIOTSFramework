import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from 'src/pages/login.page';
import SecurePage from 'src/pages/secure.page';
import assertions from 'src/utils/assertions';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username:string, password:string) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message:string) => {
    await assertions.toBeExisting(SecurePage.flashAlert)
    await assertions.toHaveTextContain(SecurePage.flashAlert, message)
});
