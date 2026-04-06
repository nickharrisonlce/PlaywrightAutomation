Feature: Ecommerce validations

  Scenario: Place order
    Given a login to ecommerce application with "nickharrisonlce@gmail.com" and "Password$1"
    When add "adidas original" to Cart
    Then verify "adidas original" is displayed in the Cart
    When enter valid details and place order
    Then verify order is present in order history