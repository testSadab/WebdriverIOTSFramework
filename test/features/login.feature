@Login
Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    @DEV
    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |

    @QA
    Examples:
      | username | password | message                   |
      | foobar   | barfoo   | Your username is invalid! |
