Feature: Wait types demo

    Scenario: Test different wait types
        Given I am on dynamic loading <AppURL> page
        When I click on start button
        Then I validate loading icon

        Examples:
            | AppURL                                               |
            | https://the-internet.herokuapp.com/dynamic_loading/1 |