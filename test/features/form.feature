Feature: Test practise form

    Scenario: Validate form data with json file
        Given I am on form page "https://demoqa.com/automation-practice-form"
        When I enter all mandate fields
    
    Scenario Outline: Validate form data with json file
        Given I am on form page "https://demoqa.com/automation-practice-form"
        When I enter all mandate fields from <datapath>
    Examples:
        | datapath | 
        | test/resources/formdata2.json  |
        | test/resources/formdata3.json  |