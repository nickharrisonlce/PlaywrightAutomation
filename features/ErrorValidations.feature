Feature: Ecommerce validations

  @Validation
  @foo
  Scenario Outline: Place order
    Given a login to ecommerce2 application with "<username>" and "<password>"
    Then verify error message is displayed


  Examples:
  | username                  | password   |
  | nickharrisonlce@gmail.com | Password$1 |
  | hello123@gmail.com        | abcdefghij |