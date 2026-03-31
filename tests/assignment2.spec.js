const { test, expect } = require("@playwright/test");




async function loginAndGoToEvents(page, email, password) {
    await page.getByRole('textbox', { name: 'Email' }).fill(email);
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByTestId('nav-events').click();
    await expect(page).toHaveURL(/\/events/);
}




test("one ticket refund", async ({ page }) => {

    const site = "https://eventhub.rahulshettyacademy.com/login";
    const email = "nickharrisonlce@gmail.com";
    const password = "P@ssword1";
    const name = "Nicholas";
    const phoneNum = "5556667777";

    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await loginAndGoToEvents(page, email, password);

    await page.getByRole('article').nth(0).getByRole('link', { name: "Book Now" }).click();

    await page.getByRole('textbox', { name: 'Full Name*' }).click();
    await page.getByRole('textbox', { name: 'Full Name*' }).fill(name);
    await page.getByTestId('customer-email').click();
    await page.getByTestId('customer-email').fill(email);
    await page.getByRole('textbox', { name: 'Phone Number*' }).click();
    await page.getByRole('textbox', { name: 'Phone Number*' }).fill(phoneNum);
    await page.getByRole('button', { name: 'Confirm Booking' }).click();
    await page.getByRole('button', { name: 'View My Bookings' }).click();
    await expect(page).toHaveURL(/\/bookings/);
    await page.waitForLoadState('networkidle');
    await page.getByRole('link', { name: 'View Details' }).first().click();
    await expect(page.getByRole('main')).toContainText('Booking Information');

    const ourBookingName = await page.locator("h1").textContent();
    console.log(ourBookingName);

    const ourBookingId = await page.locator("span.text-indigo-600").textContent();
    console.log(ourBookingId);

    const nameFirstDigit = ourBookingName[0];
    console.log(nameFirstDigit);
    const idFirstDigit = ourBookingId[0];
    console.log(idFirstDigit);
    expect(nameFirstDigit).toBe(idFirstDigit);

    await page.getByTestId('check-refund-btn').click();

    await expect(page.getByTestId('refund-result')).toBeVisible();

    await expect(page.getByRole('strong')).toContainText('Eligible for refund.');
    await expect(page.getByTestId('refund-result')).toContainText('Single-ticket bookings qualify for a full refund.');

});





test("multi ticket refund", async ({ page }) => {

    const site = "https://eventhub.rahulshettyacademy.com/login";
    const email = "nickharrisonlce@gmail.com";
    const password = "P@ssword1";
    const name = "Nicholas";
    const phoneNum = "5556667777";

    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await loginAndGoToEvents(page, email, password);
    await page.getByRole('article').nth(0).getByRole('link', { name: "Book Now" }).click();

    await page.getByRole("button", { name: "+" }).click();
    await page.getByRole("button", { name: "+" }).click();

    await page.getByRole('textbox', { name: 'Full Name*' }).click();
    await page.getByRole('textbox', { name: 'Full Name*' }).fill(name);
    await page.getByTestId('customer-email').click();
    await page.getByTestId('customer-email').fill(email);
    await page.getByRole('textbox', { name: 'Phone Number*' }).click();
    await page.getByRole('textbox', { name: 'Phone Number*' }).fill(phoneNum);
    await page.getByRole('button', { name: 'Confirm Booking' }).click();
    await page.getByRole('button', { name: 'View My Bookings' }).click();
    await page.getByRole('button', { name: 'View Details' }).first().click();
    await expect(page.getByRole('main')).toContainText('Booking Information');

    const ourBookingName = await page.locator("h1").textContent();
    console.log(ourBookingName);

    const ourBookingId = await page.locator("span.text-indigo-600").textContent();
    console.log(ourBookingId);

    const nameFirstDigit = ourBookingName[0];
    console.log(nameFirstDigit);
    const idFirstDigit = ourBookingId[0];
    console.log(idFirstDigit);
    expect(nameFirstDigit).toBe(idFirstDigit);

    await page.getByTestId('check-refund-btn').click();

    //await expect(page.getByTestId('refund-result')).toBeVisible();
    await expect(page.getByRole('strong')).toContainText('Not eligible for refund.');
    await expect(page.getByRole('main')).toContainText('Group bookings (3 tickets) are non-refundable.');
    // await expect(page.getByRole('strong')).toContainText('Not eligible for refund.');
    // await expect(page.getByTestId('refund-result')).toContainText('Group bookings (3 tickets) are non-refundable.');

});