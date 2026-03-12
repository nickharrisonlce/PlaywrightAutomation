const {test, expect} =  require("@playwright/test");


test("assignment1", async({page}) =>
{

    const site = "https://eventhub.rahulshettyacademy.com/login";
    const email = "nickharrisonlce@gmail.com";
    const password = "P@ssword1";
    const numSeats = 50;
    const price = 99;
    const eventName = String(Date.now());
    const venue = "LCA";
    
    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill(email);
    await page.getByRole('textbox', { name: 'Email' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    await page.getByRole('button', { name: 'Sign In' }).click();
    await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
    await page.getByTestId('nav-events').click();
    await page.getByRole('button', { name: 'Admin' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Manage Events' }).click();
    await page.getByTestId('event-title-input').click();
    await page.getByTestId('event-title-input').fill(eventName);
    await page.getByRole('textbox', { name: 'Describe the event…' }).click();
    await page.getByRole('textbox', { name: 'Describe the event…' }).fill('Event description\nNew line here');
    await page.getByLabel('Category*').selectOption('Concert');
    await page.getByRole('textbox', { name: 'City*' }).click();
    await page.getByRole('textbox', { name: 'City*' }).fill('Detroit');
    await page.getByRole('textbox', { name: 'Venue*' }).click();
    await page.getByRole('textbox', { name: 'Venue*' }).fill(venue);

    await page.getByRole('spinbutton', { name: 'Price ($)*' }).click();
    await page.getByRole('spinbutton', { name: 'Price ($)*' }).fill(String(price));
    await page.getByRole('spinbutton', { name: 'Total Seats*' }).click();
    await page.getByRole('spinbutton', { name: 'Total Seats*' }).fill(String(numSeats));
    await page.getByRole('textbox', { name: 'Event Date & Time*' }).fill('2027-01-01T19:00');


    await page.getByTestId('add-event-btn').click();
    await expect(page.getByText('✓Event created!×')).toBeVisible();

    await page.getByTestId('nav-events').click();
    await expect(page.getByRole("article", {id: "event-card"}).nth(0)).toBeVisible();
    const ourEvent = await page.locator("[id*='event-card']").filter({hasText: eventName});
    await expect(ourEvent).toBeVisible();
    await expect(ourEvent.getByText('seats available')).toContainText(String(numSeats));
    await page.getByRole('article').filter({ hasText: eventName }).getByTestId('book-now-btn').click();
    
    await page.getByRole('textbox', { name: 'Full Name*' }).click();
    await page.getByRole('textbox', { name: 'Full Name*' }).fill('Nicholas Harrison');
    await page.getByTestId('customer-email').click();
    await page.getByTestId('customer-email').fill(email);
    await page.getByRole('textbox', { name: 'Phone Number*' }).click();
    await page.getByRole('textbox', { name: 'Phone Number*' }).fill('5556667777');
    await page.getByRole('button', { name: 'Confirm Booking' }).click();
    
    await expect(page.getByText('Booking Ref')).toBeVisible();
    await page.getByTestId('nav-bookings').click();
    await expect(page.getByTestId('booking-card').filter({hasText: eventName})).toBeVisible();
    await page.getByTestId('nav-events').click();
    
    await expect(page.getByRole("article", {id: "event-card"}).nth(0)).toBeVisible();
    
    await expect(ourEvent).toBeVisible();
    await expect(ourEvent).toContainText(String(numSeats-1));

    console.log(eventName);


});