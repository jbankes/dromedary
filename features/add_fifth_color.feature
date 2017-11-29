Feature: User can choose from 5 colors
  As a user
  I want to be able to choose from 5 colors

  Scenario: A fifth color is clicked
    Given there are 5 colors
    When I click the color
    Then the color updates the value
