Feature: Ecommerce validations

  @Regression
  Scenario: Place order
    Given a login to ecommerce application with "nickharrisonlce@gmail.com" and "Password$1"
    When add "zara coat 3" to Cart
    Then verify "adidas original" is displayed in the Cart
    When enter valid details and place order
    Then verify order is present in order history

  @Validation
  Scenario Outline: Place order
    Given a login to ecommerce2 application with "<username>" and "<password>"
    Then verify error message is displayed

    Examples:
      | username                  | password   |
      | nickharrisonlce@gmail.com | Password$1 |
      | hello123@gmail.com        | abcdefghij |
