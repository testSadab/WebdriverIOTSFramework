@Regression
Feature: Test End to End User

    @GETCall
    Scenario Outline: Validate End to End Get Single User
        Given I am on page <PageUrl>
        When I perform <EndPoint> user search
        And I make GET <EndPoint> api call
        Then I validate the search result

        Examples:
            | PageUrl                  | EndPoint     |
            | http://resttesttest.com/ | /api/users/2 |

    @POSTCall
    Scenario Outline: Validate End to End Create User
        Given I am on page <PageUrl>
        When I perform create use search for api <EndPoint>
        And I make POST <EndPoint> api call
        Then I validate the create user search result

        Examples:
            | PageUrl                  | EndPoint   |
            | http://resttesttest.com/ | /api/users |