const {test, expect, request} = require ('@playwright/test');
const {APIUtils} = require("./utils/APiUtils");
let response;
const loginPayload = {userEmail: "nickharrisonlce@gmail.com", userPassword: "Password$1"};
const orderPayload = {orders:[{country:"India",productOrderedId:"6960eae1c941646b7a8b3ed3"}]};
const fakePayloadOrders = {data:[],message:"No Orders"};

test.beforeAll(async()=>{
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPayload);
});
 

test('Place the order', async ({ page }) => {

    const email = "nickharrisonlce@gmail.com";
    await page.addInitScript(value => {  // this is as if a function is created f(value) -         <------- personal syntax notes
        window.localStorage.setItem('token', value);  //                                 |
    }, response.token); // then here, the function is called f(token)     <--------------'

    await page.goto("https://rahulshettyacademy.com/client");


    // AI notes included for page.route

    // page.route allows us to intercept network requests made by the browser.
    // Think of it as setting up a "checkpoint" — anytime the browser tries to call
    // this URL, Playwright catches it before it gets a real response, letting us
    // decide what to send back instead.
    await page.route(
        "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*", 
        async route => 
        {
            // Instead of blocking the request entirely, we still send it to the real
            // server and wait for the actual response. This gives us the real response
            // object (status code, headers, etc.) which we can reuse or modify.
            // route.request() extracts the original request so we can forward it.
            const response = await page.request.fetch(route.request());
            

            // Convert our fake payload to a JSON string (HTTP responses travel as text).
            let body = JSON.stringify(fakePayloadOrders);
            console.log(response, body);

            // Send the response back to the browser — real headers/status, but with our
            // fake body swapped in. The app never knows the difference.
            route.fulfill({ response, body });
        }    
    )


    await page.locator("button[routerLink*='myorders']").click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
    console.log(await page.locator(".mt-4").textContent());
    



});