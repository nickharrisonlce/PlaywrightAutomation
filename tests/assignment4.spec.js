const { test, expect, request } = require("@playwright/test");

const BASE_URL = "https://eventhub.rahulshettyacademy.com"
const API_URL = BASE_URL + "/api";

const mainEmail = "nickharrisonlce@gmail.com";
const mainPassword = "P@ssword1";
const otherEmail = "nickother@yahoo.com";
const otherPassword = "Y@hoo111";

const loginPayload1 = { email: mainEmail, password: mainPassword };
const loginPayload2 = { email: otherEmail, password: otherPassword };

let apiContext;

test.beforeAll(async () => {
    apiContext = await request.newContext();
});


//async function loginAs(apiContext, loginPayload) {
//     const loginResponse = await apiContext.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login", {data: loginPayload});
//     const loginResponseJson = await loginResponse.json();
//     expect(loginResponse.status()).toBe(200);
//     return loginResponseJson.token;
// }


test("assignment4", async ({ page, browser }) => {

    //replace this with the helper function
    const loginResponse = await apiContext.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login", { data: loginPayload2 });
    const loginResponseJson = await loginResponse.json();
    //console.log(loginResponseJson);
    expect(loginResponse.status()).toBe(200);
    const token = loginResponseJson.token;

    const eventsResponse = await apiContext.get("https://api.eventhub.rahulshettyacademy.com/api/events?page=1&limit=12",
        {
            headers:
            {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json"
            }
        }
    );
    const eventsResponseJson = await eventsResponse.json();
    const firstEvent = eventsResponseJson.data[0];
    //console.log(firstEvent);
    expect(eventsResponse.status()).toBe(200);
    const firstEventId = firstEvent.id;
    const name1 = 'Yahoo User';
    const phone1 = "5550000001";
    const quantity1 = 1;

    const bookingPayload = { customerName: name1, customerEmail: otherEmail, customerPhone: phone1, quantity: quantity1, eventId: firstEventId };

    const booking = await apiContext.post("https://api.eventhub.rahulshettyacademy.com/api/bookings", {
        data: bookingPayload,
        headers:
        {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json"
        }
    });

    const bookingJson = await booking.json();
    const bookingId = bookingJson.id;
    //console.log(bookingJson);
    expect(booking.status()).toBe(201);


    //replace this with the helper function
    const loginResponse2 = await apiContext.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login", { data: loginPayload1 });
    const loginResponseJson2 = await loginResponse2.json();
    console.log(loginResponseJson2);
    expect(loginResponse2.status()).toBe(200);
    const token2 = loginResponseJson2.token;


    const contextUser2 = await browser.newContext();
    const pageUser2 = await contextUser2.newPage();


    await pageUser2.addInitScript((t) => {
        window.localStorage.setItem("token", t);
    }, token2);

    await pageUser2.goto("https://eventhub.rahulshettyacademy.com/bookings");
    await pageUser2.pause();









})