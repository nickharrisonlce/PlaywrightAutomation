const {test, expect} = require ('@playwright/test');
 
 
 
 
test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "nickharrisonlce@gmail.com";
   const password = "Password$1"
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill(password);
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
   
   const itemCard = page.locator(".card", {hasText: 'iphone 13 pro' });
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

   const checkoutRow = await page.locator("li.totalRow", {hasText: "Checkout"});
   await checkoutRow.locator(".btn.btn-primary").click();
   //await page.pause();

   
   

 
});