const assert = require('assert')
const { Given, When, Then } = require('@cucumber/cucumber')
//const { Greeter } = require('../../src')
const { POManager } = require("../../pageObjects/POManager");
const { expect } = require('@playwright/test');
const playwright = require('@playwright/test');


Given('a login to ecommerce application with {string} and {string}', {timeout: 100 * 1000}, async function (username, password) {
    const browser = await playwright.chromium.launch({
        headless: true
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    this.page = page;
    this.username = username;
    this.poManager = new POManager(page);
    this.loginPage = this.poManager.getLoginPage();
    await this.loginPage.goTo();
    await this.loginPage.validLogin(username, password);
    //return 'pending';
});

When('add {string} to Cart', async function (productName) {
    this.dashboardPage = this.poManager.getDashboardPage();
    await this.dashboardPage.searchProduct(productName);
    await this.dashboardPage.navigateToCart();
    //return 'pending';
});

Then('verify {string} is displayed in the Cart', function (string) {
    // Nothing done here
    //return 'pending';
});

When('enter valid details and place order', {timeout: 100 * 1000}, async function () {
    const page = this.page;
    const checkoutRow = await page.locator("li.totalRow", { hasText: "Checkout" });
    await checkoutRow.locator(".btn.btn-primary").click();
    //await page.pause();

    const emailInput = await page.locator("input.input.txt.input.txt.text-validated.ng-untouched.ng-pristine.ng-valid").inputValue();
    expect(emailInput).toBe(this.username);
    const emailLabel = await page.locator("label[type='text']");
    expect(emailLabel).toHaveText(this.username);

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
    //return 'pending';
});

Then('verify order is present in order history', async function () {
    const page = this.page;
    await page.waitForLoadState('networkidle');
    await expect(page.locator(".hero-primary")).toHaveText("Thankyou for the order. ");
    //return 'pending';
});