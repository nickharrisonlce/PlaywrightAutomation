// Author: Nicholas H
const { test, expect } = require('@playwright/test');
const { LoginPagePractise } = require("../pageObjects/LoginPagePractise");
const { ShopPage } = require("../pageObjects/ShopPage");

const dataSet = JSON.parse(JSON.stringify(require("../utils/shopTestData.json")));

for (const data of dataSet) {
   test(`@Web Shop Login and Verify ${data.productName}`, async ({ page }) => {
      // Initialize page objects
      const loginPagePractise = new LoginPagePractise(page);
      const shopPage = new ShopPage(page);

      // Navigate to login page
      await loginPagePractise.goTo();

      // Perform login with credentials and accept terms
      await loginPagePractise.login(data.username, data.password);

      // Verify navigation to shop page
      expect(page.url()).toContain("angularpractice/shop");

      // Verify if the product exists on the shop page
      const productHeading = shopPage.getProductHeading(data.productName);
      await expect(productHeading).toBeVisible();
      await expect(productHeading).toHaveText(data.productName, { ignoreCase: true });
   });
}
