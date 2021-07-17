Feature: The Internet website homepage

    Scenario Outline: As a user, I can open internet website

        Given I open the browser and load the url <homepageurl>
        Then I should see a header with text <headertext>

        Examples:
            | homepageurl                         | headertext              |
            | https://the-internet.herokuapp.com/ | Welcome to the-internet |