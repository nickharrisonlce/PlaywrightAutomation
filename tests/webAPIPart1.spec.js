const {test, expect, request} = require ('@playwright/test');
//const {APIUtils} = require('..utils/APIUtils');
const {APIUtils} = require('../utils/APIUtils');

let response;
const loginPayload = {userEmail: "nickharrisonlce@gmail.com", userPassword: "Password$1"};
const orderPayload = {orders:[{country:"India",productOrderedId:"6960eae1c941646b7a8b3ed3"}]};

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

   await page.goto("https://rahulshettyacademy.com/client/#/dashboard/myorders");

   const ordersTable = await page.locator("tbody");
   const numOrders = await ordersTable.locator("tr").count();
   console.log(numOrders);
   let rowFound = -1;

   for(let i = 0; i < numOrders; i++)
   {
      const tempOrderNum = await ordersTable.locator("tr").nth(i).locator("th").textContent();
      console.log(tempOrderNum);
      if(tempOrderNum === response.orderId)
      {
         console.log("The order was found at the following row: " + i);
         rowFound = i;
         break;
      }
   }

   await ordersTable.locator("tr").nth(rowFound).getByRole("button", {name: "View"}).click(); // getByRole seems to work very well
   await page.waitForLoadState('networkidle');
   await expect(await page.locator(".col-text.-main").textContent()).toBe(response.orderId);
   await page.pause();
});