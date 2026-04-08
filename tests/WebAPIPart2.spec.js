// Author: Nicholas H
//Login from UI -> collect all storage state of browser in json file

const { test, expect } = require('@playwright/test');

let webContext;
const email = "nickharrisonlce@gmail.com";
const password = "Password$1";

test.beforeAll(async ({ browser }) => {

   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill(password);
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await context.storageState({ path: "state.json" });
   webContext = await browser.newContext({ storageState: "state.json" });

})




test('@API Client App login', async ({ }) => {
   //js file- Login js, DashboardPage

   const productName = 'zara coat 3';
   const page = await webContext.newPage();
   await page.goto("https://rahulshettyacademy.com/client");
   const products = page.locator(".card-body");



   //await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles);

   const itemCard = page.locator(".card", { hasText: 'iphone 13 pro' });
   await itemCard.locator("button.btn.w-10.rounded").click();
   const price = (await itemCard.locator(".card-body").innerText()).split("$")[1].trim().split("\n")[0];
   console.log(price);
   //await page.pause();

   const cart = page.locator("[routerlink*='/dashboard/cart']");
   await cart.click();
   await page.waitForLoadState('networkidle');



   const subtotalRow = page.locator("li.totalRow", { hasText: "Subtotal" });
   await expect(subtotalRow).toBeVisible();
   const subtotalText = await subtotalRow.locator("span.value").innerText();
   const subtotalValue = subtotalText.split("$")[1].trim();
   console.log("Subtotal:", subtotalValue);
   await expect(subtotalValue).toBe(price);

   const checkoutRow = await page.locator("li.totalRow", { hasText: "Checkout" });
   await checkoutRow.locator(".btn.btn-primary").click();
   //await page.pause();

   const emailInput = await page.locator("input.input.txt.input.txt.text-validated.ng-untouched.ng-pristine.ng-valid").inputValue();
   expect(emailInput).toBe(email);
   const emailLabel = await page.locator("label[type='text']");
   expect(emailLabel).toHaveText(email);


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



   await page.pause();




});



test('@API Test case 2', async ({ }) => {
   //js file- Login js, DashboardPage

   const productName = 'zara coat 3';
   const page = await webContext.newPage();
   await page.goto("https://rahulshettyacademy.com/client");
   const products = page.locator(".card-body");



   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles);

});