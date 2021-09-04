Feature: Validate download functionality

    Scenario Outline: Test File download
        Given I open the browser and load the url <PageUrl>
        When I click on first file

        Examples:
            | PageUrl                                     |
            | https://the-internet.herokuapp.com/download |