const {test, expect, request} = require ('@playwright/test');
const loginPayload = {userEmail:"nickharrisonlce@gmail.com",userPassword:"Password$1"};
let token;
let orderId;
const orderPayload = {orders:[{country:"India",productOrderedId:"6960eae1c941646b7a8b3ed3"}]};

test.beforeAll(async()=>{
    
    //Login API
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {data: loginPayload}); 
    // so much information can be received from this response object
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    //console.log(loginResponseJson);
    token = loginResponseJson.token;
    console.log(token);

    console.log("Outgoing orderPayload:", JSON.stringify(orderPayload, null, 2));
    
    console.log("Token used in create-order:", token);
    expect(token, "Token should not be undefined/empty").toBeTruthy();

    const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", 
        {
            data: orderPayload, 
            headers: {
                'Authorization' : token,
                //'Content-Type' : 'applicaton/json'
            },
        });
    
        //debugging logs
    console.log("Order Status: ", orderResponse.status());
    console.log("Order OK:", orderResponse.ok());
    console.log("Order Headers:", await orderResponse.headers());

    const raw = await orderResponse.text();
    console.log("Order Raw Body:", raw);
    
    let orderJson;
    try {
    orderJson = JSON.parse(raw);
    } catch (e) {
    orderJson = { parseError: true, raw };
    }
    console.log("Order Parsed JSON:", JSON.stringify(orderJson, null, 2));


    orderId = orderJson.orders[0];
    console.log("Order ID: " , orderId);
});

test.beforeEach(()=>{

});

 
test('@Web Client App login', async ({ page }) => {

    const email = "nickharrisonlce@gmail.com";

    await page.addInitScript(value => {  // this is as if a function is created f(value) -         <------- personal syntax notes
        window.localStorage.setItem('token', value);  //                                 |
    }, token); // then here, the function is called f(token)     <-----------------------'


   await page.goto("https://rahulshettyacademy.com/client/#/dashboard/myorders");
   //await page.waitForLoadState('networkidle');

   const ordersTable = await page.locator("tbody");
   const numOrders = await ordersTable.locator("tr").count();
   console.log(numOrders);
   let rowFound = -1;

   for(let i = 0; i < numOrders; i++)
   {
      const tempOrderNum = await ordersTable.locator("tr").nth(i).locator("th").textContent();
      console.log(tempOrderNum);
      if(tempOrderNum === orderId)
      {
         console.log("The order was found at the following row: " + i);
         rowFound = i;
         break;
      }
   }


   await ordersTable.locator("tr").nth(rowFound).getByRole("button", {name: "View"}).click(); // getByRole seems to work very well

   await page.waitForLoadState('networkidle');
   await expect(await page.locator(".col-text.-main").textContent()).toBe(orderId);
   await page.pause();



   await page.pause();



 
});