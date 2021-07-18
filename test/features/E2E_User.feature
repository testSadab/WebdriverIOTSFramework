Feature: Test End to End User

    Scenario Outline: Validate End to End Get Single User
        Given I am on page <PageUrl>
        When I perform <EndPoint> user search
        And I make GET <EndPoint> api call
        Then I validate the search result

        Examples:
            | PageUrl                  | EndPoint     |
            | http://resttesttest.com/ | /api/users/2 |