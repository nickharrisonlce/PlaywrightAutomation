class APIUtils
{



    constructor(apiContext, loginPayload)
    {
        this.apiContext = apiContext;
        this.loginPayload = loginPayload;
    }

    async getToken()
    {
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {data: this.loginPayload}); 
        // so much information can be received from this response object
        //expect(loginResponse.ok()).toBeTruthy();
        const loginResponseJson = await loginResponse.json();
        //console.log(loginResponseJson);
        const token = loginResponseJson.token;
        //console.log(token);
        return token;
    }

    async createOrder(orderPayload)
    {
    
        let response = {};
        response.token = await this.getToken();
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", 
            {
                data: orderPayload, 
                headers: {
                    'Authorization' : response.token,
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
    
    
        const orderId = orderJson.orders[0];
        console.log("Order ID: " , orderId);
        
        response.orderId = orderId;
        
        
        return response;
        
    }



}
module.exports = {APIUtils};