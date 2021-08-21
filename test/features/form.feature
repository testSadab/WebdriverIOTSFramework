Feature: Test practise form

    Scenario: Validate form data with json file
        Given I am on form page "https://demoqa.com/automation-practice-form"
        When I enter all mandate fields
        #     And Submits the form
        # Then I should see "Thanks for submitting the form"