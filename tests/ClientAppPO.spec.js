const { test, expect } = require('@playwright/test');
const {customTest} = require("../utils/test-base.js")
const { POManager } = require("../pageObjects/POManager");

const dataSet = JSON.parse(JSON.stringify(require("../utils/placeorderTestData.json")));


for (const data of dataSet) {
   test(`@Web Client App login ${data.productName}`, async ({ page }) => {
      //js file- Login js, DashboardPage
      const poManager = new POManager(page);
      // const email = "nickharrisonlce@gmail.com";
      // const password = "Password$1"
      // const productName = 'adidas original';
      const loginPage = poManager.getLoginPage();
      await loginPage.goTo();
      await loginPage.validLogin(data.username, data.password);
      const dashboardPage = poManager.getDashboardPage();
      await dashboardPage.searchProduct(data.productName);
      await dashboardPage.navigateToCart();




      // const subtotalRow = page.locator("li.totalRow", { hasText: "Subtotal" });
      // await expect(subtotalRow).toBeVisible();
      // const subtotalText = await subtotalRow.locator("span.value").innerText();
      // const subtotalValue = subtotalText.split("$")[1].trim();
      // console.log("Subtotal:", subtotalValue);
      // await expect(subtotalValue).toBe(price);

      const checkoutRow = await page.locator("li.totalRow", { hasText: "Checkout" });
      await checkoutRow.locator(".btn.btn-primary").click();
      //await page.pause();

      const emailInput = await page.locator("input.input.txt.input.txt.text-validated.ng-untouched.ng-pristine.ng-valid").inputValue();
      expect(emailInput).toBe(data.username);
      const emailLabel = await page.locator("label[type='text']");
      expect(emailLabel).toHaveText(data.username);


      const ccInput = page.locator('div.field', { has: page.locator('div.title', { hasText: 'Credit Card Number' }) }).locator('input');
      await ccInput.fill('4542 9931 9292 2293');

      const expiryDropdowns = await page.locator("div.field.small", { has: page.locator('div.title', { hasText: "Expiry Date" }) });
      const monthDropdown = expiryDropdowns.locator("select.input.ddl").first();
      const dayDropdown = expiryDropdowns.locator("select.input.ddl").nth(1);

      await expect(monthDropdown).toBeVisible();
      await monthDropdown.selectOption({ label: "05" });
      await dayDropdown.selectOption({ label: "14" });

      const cvv = await page.locator("div.field.small", { has: page.locator("div.title", { hasText: "CVV Code" }) }).locator("input.input.txt");
      await cvv.fill("999");


      const nameOnCard = await page.locator("div.field", { has: page.locator("div.title", { hasText: "Name on Card" }) }).locator("input.input.txt");
      await nameOnCard.fill("Nicholas O Harrison");

      //const applyCoupon = await page.locator("div.field.small", {has: page.locator("div.title", {hasText: "Apply Coupon"})}).locator("[name*='coupon']");
      const applyCoupon = await page.locator("[name*='coupon']");
      await applyCoupon.fill("rahulshettyacademy");

      const couponBtn = await page.locator("button[type='submit']");
      await couponBtn.click();
      await page.waitForLoadState('networkidle');
      const couponAppliedText = await page.locator(".mt-1.ng-star-inserted").textContent();
      await expect(couponAppliedText).toBe("* Coupon Applied");

      const countryBox = await page.locator("[placeholder*= 'Select Country']");
      countryBox.pressSequentially("united");
      const dropdown = page.locator(".ta-results");
      await dropdown.waitFor();
      const optionsCount = await dropdown.locator("button").count();
      for (let i = 0; i < optionsCount; i++) {
         const text = await dropdown.locator("button").nth(i).textContent();
         if (text === " United States") {
            await dropdown.locator("button").nth(i).click();
            break;
         }

      }

      await page.locator(".action__submit").click();

      await page.waitForLoadState('networkidle');
      await expect(page.locator(".hero-primary")).toHaveText("Thankyou for the order. ");
      const orderNumFull = await page.locator("label[class*='ng-star-inserted']").textContent();
      console.log(orderNumFull);
      const orderNum = orderNumFull.split("|")[1].split("|")[0].trim();
      console.log(orderNum);

      await page.locator(".btn.btn-custom[routerlink='/dashboard/myorders']").click();
      //await page.waitForLoadState('networkidle');

      await page.locator("h1[class='ng-star-inserted']").waitFor();

      const ordersTable = await page.locator("tbody");
      const numOrders = await ordersTable.locator("tr").count();
      console.log(numOrders);
      let rowFound = -1;

      for (let i = 0; i < numOrders; i++) {
         const tempOrderNum = await ordersTable.locator("tr").nth(i).locator("th").textContent();
         console.log(tempOrderNum);
         if (tempOrderNum === orderNum) {
            console.log("The order was found at the following row: " + i);
            rowFound = i;
            break;
         }
      }


      await ordersTable.locator("tr").nth(rowFound).getByRole("button", { name: "View" }).click(); // getByRole seems to work very well

      await page.waitForLoadState('networkidle');
      await expect(await page.locator(".col-text.-main").textContent()).toBe(orderNum);



      //await page.pause();




   });
}


   customTest.only(`Client App login`, async ({ page, testDataForOrder }) => {
      //js file- Login js, DashboardPage
      const poManager = new POManager(page);
      // const email = "nickharrisonlce@gmail.com";
      // const password = "Password$1"
      // const productName = 'adidas original';
      const loginPage = poManager.getLoginPage();
      await loginPage.goTo();
      await loginPage.validLogin(testDataForOrder.username, testDataForOrder.password);
      const dashboardPage = poManager.getDashboardPage();
      await dashboardPage.searchProduct(testDataForOrder.productName);
      await dashboardPage.navigateToCart();

      const checkoutRow = await page.locator("li.totalRow", { hasText: "Checkout" });
      await checkoutRow.locator(".btn.btn-primary").click();
      //await page.pause();

      const emailInput = await page.locator("input.input.txt.input.txt.text-validated.ng-untouched.ng-pristine.ng-valid").inputValue();
      expect(emailInput).toBe(testDataForOrder.username);
      const emailLabel = await page.locator("label[type='text']");
      expect(emailLabel).toHaveText(testDataForOrder.username);

      const ccInput = page.locator('div.field', { has: page.locator('div.title', { hasText: 'Credit Card Number' }) }).locator('input');
      await ccInput.fill('4542 9931 9292 2293');

      const expiryDropdowns = await page.locator("div.field.small", { has: page.locator('div.title', { hasText: "Expiry Date" }) });
      const monthDropdown = expiryDropdowns.locator("select.input.ddl").first();
      const dayDropdown = expiryDropdowns.locator("select.input.ddl").nth(1);

      await expect(monthDropdown).toBeVisible();
      await monthDropdown.selectOption({ label: "05" });
      await dayDropdown.selectOption({ label: "14" });

      const cvv = await page.locator("div.field.small", { has: page.locator("div.title", { hasText: "CVV Code" }) }).locator("input.input.txt");
      await cvv.fill("999");


      const nameOnCard = await page.locator("div.field", { has: page.locator("div.title", { hasText: "Name on Card" }) }).locator("input.input.txt");
      await nameOnCard.fill("Nicholas O Harrison");

      //const applyCoupon = await page.locator("div.field.small", {has: page.locator("div.title", {hasText: "Apply Coupon"})}).locator("[name*='coupon']");
      const applyCoupon = await page.locator("[name*='coupon']");
      await applyCoupon.fill("rahulshettyacademy");

      const couponBtn = await page.locator("button[type='submit']");
      await couponBtn.click();
      await page.waitForLoadState('networkidle');
      const couponAppliedText = await page.locator(".mt-1.ng-star-inserted").textContent();
      await expect(couponAppliedText).toBe("* Coupon Applied");

      const countryBox = await page.locator("[placeholder*= 'Select Country']");
      countryBox.pressSequentially("united");
      const dropdown = page.locator(".ta-results");
      await dropdown.waitFor();
      const optionsCount = await dropdown.locator("button").count();
      for (let i = 0; i < optionsCount; i++) {
         const text = await dropdown.locator("button").nth(i).textContent();
         if (text === " United States") {
            await dropdown.locator("button").nth(i).click();
            break;
         }

      }

      await page.locator(".action__submit").click();

      await page.waitForLoadState('networkidle');
      await expect(page.locator(".hero-primary")).toHaveText("Thankyou for the order. ");

   });