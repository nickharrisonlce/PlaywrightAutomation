# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.js >> @Web Client App login adidas original
- Location: tests\ClientAppPO.spec.js:9:4

# Error details

```
Error: locator.textContent: Error: strict mode violation: locator('label[class*=\'ng-star-inserted\']') resolved to 2 elements:
    1) <label _ngcontent-nvx-c39="" class="ng-star-inserted"> | 69cd28a0f86ba51a653dee40 | </label> aka getByText('| 69cd28a0f86ba51a653dee40 |')
    2) <label _ngcontent-nvx-c39="" class="ng-star-inserted"> | 69cd28a0f86ba51a653dee43 | </label> aka getByText('| 69cd28a0f86ba51a653dee43 |')

Call log:
  - waiting for locator('label[class*=\'ng-star-inserted\']')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - navigation [ref=e5]:
      - generic [ref=e7]:
        - link "Automation Automation Practice":
          - /url: ""
          - generic [ref=e8] [cursor=pointer]:
            - heading "Automation" [level=3] [ref=e9]
            - paragraph [ref=e10]: Automation Practice
      - text: 
      - link "Join Rahul Shetty for a QA Career Meetup in CHENNAI — Book Your Spot" [ref=e11] [cursor=pointer]:
        - /url: http://qasummit.org/
      - list [ref=e12]:
        - listitem [ref=e13] [cursor=pointer]:
          - button " HOME" [ref=e14]:
            - generic [ref=e15]: 
            - text: HOME
        - listitem
        - listitem [ref=e16] [cursor=pointer]:
          - button " ORDERS" [ref=e17]:
            - generic [ref=e18]: 
            - text: ORDERS
        - listitem [ref=e19] [cursor=pointer]:
          - button " Cart" [ref=e20]:
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22] [cursor=pointer]:
          - button "Sign Out" [ref=e23]:
            - generic [ref=e24]: 
            - text: Sign Out
    - table [ref=e26]:
      - rowgroup [ref=e27]:
        - 'row "Thankyou for the order. You can see all the Orders in Orders History Page | 69cd28a0f86ba51a653dee40 | | 69cd28a0f86ba51a653dee43 | Queen ADIDAS ORIGINAL Qty: 1 $ 11500 Ready to Ship Queen ZARA COAT 3 Qty: 1 $ 11500 Ready to Ship Items in your order may ship separately. View your order for shipping updates. Click To Download Order Details in CSV Questions? We''re on call. Monday to Friday 9am - 9pm Saturday to Sunday 10am - 6pm dummywebsite@rahulshettyacademy.com" [ref=e28]':
          - 'cell "Thankyou for the order. You can see all the Orders in Orders History Page | 69cd28a0f86ba51a653dee40 | | 69cd28a0f86ba51a653dee43 | Queen ADIDAS ORIGINAL Qty: 1 $ 11500 Ready to Ship Queen ZARA COAT 3 Qty: 1 $ 11500 Ready to Ship Items in your order may ship separately. View your order for shipping updates. Click To Download Order Details in CSV Questions? We''re on call. Monday to Friday 9am - 9pm Saturday to Sunday 10am - 6pm dummywebsite@rahulshettyacademy.com" [ref=e29]':
            - table [ref=e30]:
              - rowgroup [ref=e31]:
                - row [ref=e32]:
                  - cell [ref=e33]
                - row [ref=e34]:
                  - cell [ref=e35]
                - row [ref=e36]:
                  - cell [ref=e37]
                - row "Thankyou for the order. You can see all the Orders in Orders History Page | 69cd28a0f86ba51a653dee40 | | 69cd28a0f86ba51a653dee43 |" [ref=e38]:
                  - cell "Thankyou for the order. You can see all the Orders in Orders History Page | 69cd28a0f86ba51a653dee40 | | 69cd28a0f86ba51a653dee43 |" [ref=e39]:
                    - table [ref=e40]:
                      - rowgroup [ref=e41]:
                        - row "Thankyou for the order. You can see all the Orders in Orders History Page | 69cd28a0f86ba51a653dee40 | | 69cd28a0f86ba51a653dee43 |" [ref=e42]:
                          - cell "Thankyou for the order. You can see all the Orders in Orders History Page | 69cd28a0f86ba51a653dee40 | | 69cd28a0f86ba51a653dee43 |" [ref=e43]:
                            - table [ref=e44]:
                              - rowgroup [ref=e45]:
                                - row "Thankyou for the order." [ref=e46]:
                                  - cell "Thankyou for the order." [ref=e47]:
                                    - heading "Thankyou for the order." [level=1] [ref=e48]
                                - row "You can see all the Orders in Orders History Page" [ref=e49]:
                                  - cell "You can see all the Orders in Orders History Page" [ref=e50]:
                                    - text: You can see all the Orders in
                                    - generic [ref=e51] [cursor=pointer]: Orders History Page
                                - row "| 69cd28a0f86ba51a653dee40 | | 69cd28a0f86ba51a653dee43 |" [ref=e52]:
                                  - cell "| 69cd28a0f86ba51a653dee40 | | 69cd28a0f86ba51a653dee43 |" [ref=e53]:
                                    - generic [ref=e54]: "| 69cd28a0f86ba51a653dee40 |"
                                    - generic [ref=e55]: "| 69cd28a0f86ba51a653dee43 |"
                - row [ref=e56]:
                  - cell [ref=e57]
                - 'row "Queen ADIDAS ORIGINAL Qty: 1 $ 11500 Ready to Ship Queen ZARA COAT 3 Qty: 1 $ 11500 Ready to Ship Items in your order may ship separately. View your order for shipping updates. Click To Download Order Details in CSV" [ref=e58]':
                  - 'cell "Queen ADIDAS ORIGINAL Qty: 1 $ 11500 Ready to Ship Queen ZARA COAT 3 Qty: 1 $ 11500 Ready to Ship Items in your order may ship separately. View your order for shipping updates. Click To Download Order Details in CSV" [ref=e59]':
                    - table [ref=e60]:
                      - rowgroup [ref=e61]:
                        - row [ref=e62]:
                          - cell [ref=e63]
                        - generic [ref=e64]:
                          - 'row "Queen ADIDAS ORIGINAL Qty: 1 $ 11500 Ready to Ship" [ref=e65]':
                            - cell "Queen" [ref=e66]:
                              - img "Queen" [ref=e67]
                            - 'cell "ADIDAS ORIGINAL Qty: 1" [ref=e68]':
                              - generic [ref=e69]: ADIDAS ORIGINAL
                              - generic [ref=e70]: "Qty: 1"
                            - cell "$ 11500 Ready to Ship" [ref=e71]:
                              - generic [ref=e72]: $ 11500
                              - strong [ref=e74]: Ready to Ship
                          - 'row "Queen ZARA COAT 3 Qty: 1 $ 11500 Ready to Ship" [ref=e75]':
                            - cell "Queen" [ref=e76]:
                              - img "Queen" [ref=e77]
                            - 'cell "ZARA COAT 3 Qty: 1" [ref=e78]':
                              - generic [ref=e79]: ZARA COAT 3
                              - generic [ref=e80]: "Qty: 1"
                            - cell "$ 11500 Ready to Ship" [ref=e81]:
                              - generic [ref=e82]: $ 11500
                              - strong [ref=e84]: Ready to Ship
                        - row "Items in your order may ship separately. View your order for shipping updates." [ref=e85]:
                          - cell "Items in your order may ship separately. View your order for shipping updates." [ref=e86]:
                            - text: Items in your order may ship separately.
                            - text: View your order for shipping updates.
                        - row "Click To Download Order Details in CSV" [ref=e87]:
                          - button "Click To Download Order Details in CSV" [ref=e88] [cursor=pointer]
                - row [ref=e89]:
                  - cell [ref=e90]
                - row "Questions? We're on call. Monday to Friday 9am - 9pm Saturday to Sunday 10am - 6pm dummywebsite@rahulshettyacademy.com" [ref=e91]:
                  - cell "Questions? We're on call. Monday to Friday 9am - 9pm Saturday to Sunday 10am - 6pm dummywebsite@rahulshettyacademy.com" [ref=e92]:
                    - table [ref=e93]:
                      - rowgroup [ref=e94]:
                        - row [ref=e95]:
                          - cell [ref=e96]
                        - row "Questions? We're on call." [ref=e97]:
                          - cell "Questions? We're on call." [ref=e98]
                        - row "Monday to Friday 9am - 9pm" [ref=e99]:
                          - cell "Monday to Friday 9am - 9pm" [ref=e100]
                        - row "Saturday to Sunday 10am - 6pm" [ref=e101]:
                          - cell "Saturday to Sunday 10am - 6pm" [ref=e102]
                        - row "dummywebsite@rahulshettyacademy.com" [ref=e103]:
                          - cell "dummywebsite@rahulshettyacademy.com" [ref=e104]: dummywebsite@rahulshettyacademy.com
                        - row [ref=e105]:
                          - cell [ref=e106]
                - row [ref=e107]:
                  - cell [ref=e108]
                - row
  - generic "Order Placed Successfully" [ref=e110] [cursor=pointer]
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | const {customTest} = require("../utils/test-base.js")
  3   | const { POManager } = require("../pageObjects/POManager");
  4   | 
  5   | const dataSet = JSON.parse(JSON.stringify(require("../utils/placeorderTestData.json")));
  6   | 
  7   | 
  8   | for (const data of dataSet) {
  9   |    test(`@Web Client App login ${data.productName}`, async ({ page }) => {
  10  |       //js file- Login js, DashboardPage
  11  |       const poManager = new POManager(page);
  12  |       // const email = "nickharrisonlce@gmail.com";
  13  |       // const password = "Password$1"
  14  |       // const productName = 'adidas original';
  15  |       const loginPage = poManager.getLoginPage();
  16  |       await loginPage.goTo();
  17  |       await loginPage.validLogin(data.username, data.password);
  18  |       const dashboardPage = poManager.getDashboardPage();
  19  |       await dashboardPage.searchProduct(data.productName);
  20  |       await dashboardPage.navigateToCart();
  21  | 
  22  | 
  23  | 
  24  | 
  25  |       // const subtotalRow = page.locator("li.totalRow", { hasText: "Subtotal" });
  26  |       // await expect(subtotalRow).toBeVisible();
  27  |       // const subtotalText = await subtotalRow.locator("span.value").innerText();
  28  |       // const subtotalValue = subtotalText.split("$")[1].trim();
  29  |       // console.log("Subtotal:", subtotalValue);
  30  |       // await expect(subtotalValue).toBe(price);
  31  | 
  32  |       const checkoutRow = await page.locator("li.totalRow", { hasText: "Checkout" });
  33  |       await checkoutRow.locator(".btn.btn-primary").click();
  34  |       //await page.pause();
  35  | 
  36  |       const emailInput = await page.locator("input.input.txt.input.txt.text-validated.ng-untouched.ng-pristine.ng-valid").inputValue();
  37  |       expect(emailInput).toBe(data.username);
  38  |       const emailLabel = await page.locator("label[type='text']");
  39  |       expect(emailLabel).toHaveText(data.username);
  40  | 
  41  | 
  42  |       const ccInput = page.locator('div.field', { has: page.locator('div.title', { hasText: 'Credit Card Number' }) }).locator('input');
  43  |       await ccInput.fill('4542 9931 9292 2293');
  44  | 
  45  |       const expiryDropdowns = await page.locator("div.field.small", { has: page.locator('div.title', { hasText: "Expiry Date" }) });
  46  |       const monthDropdown = expiryDropdowns.locator("select.input.ddl").first();
  47  |       const dayDropdown = expiryDropdowns.locator("select.input.ddl").nth(1);
  48  | 
  49  |       await expect(monthDropdown).toBeVisible();
  50  |       await monthDropdown.selectOption({ label: "05" });
  51  |       await dayDropdown.selectOption({ label: "14" });
  52  | 
  53  |       const cvv = await page.locator("div.field.small", { has: page.locator("div.title", { hasText: "CVV Code" }) }).locator("input.input.txt");
  54  |       await cvv.fill("999");
  55  | 
  56  | 
  57  |       const nameOnCard = await page.locator("div.field", { has: page.locator("div.title", { hasText: "Name on Card" }) }).locator("input.input.txt");
  58  |       await nameOnCard.fill("Nicholas O Harrison");
  59  | 
  60  |       //const applyCoupon = await page.locator("div.field.small", {has: page.locator("div.title", {hasText: "Apply Coupon"})}).locator("[name*='coupon']");
  61  |       const applyCoupon = await page.locator("[name*='coupon']");
  62  |       await applyCoupon.fill("rahulshettyacademy");
  63  | 
  64  |       const couponBtn = await page.locator("button[type='submit']");
  65  |       await couponBtn.click();
  66  |       await page.waitForLoadState('networkidle');
  67  |       const couponAppliedText = await page.locator(".mt-1.ng-star-inserted").textContent();
  68  |       await expect(couponAppliedText).toBe("* Coupon Applied");
  69  | 
  70  |       const countryBox = await page.locator("[placeholder*= 'Select Country']");
  71  |       countryBox.pressSequentially("united");
  72  |       const dropdown = page.locator(".ta-results");
  73  |       await dropdown.waitFor();
  74  |       const optionsCount = await dropdown.locator("button").count();
  75  |       for (let i = 0; i < optionsCount; i++) {
  76  |          const text = await dropdown.locator("button").nth(i).textContent();
  77  |          if (text === " United States") {
  78  |             await dropdown.locator("button").nth(i).click();
  79  |             break;
  80  |          }
  81  | 
  82  |       }
  83  | 
  84  |       await page.locator(".action__submit").click();
  85  | 
  86  |       await page.waitForLoadState('networkidle');
  87  |       await expect(page.locator(".hero-primary")).toHaveText("Thankyou for the order. ");
> 88  |       const orderNumFull = await page.locator("label[class*='ng-star-inserted']").textContent();
      |                                                                                   ^ Error: locator.textContent: Error: strict mode violation: locator('label[class*=\'ng-star-inserted\']') resolved to 2 elements:
  89  |       console.log(orderNumFull);
  90  |       const orderNum = orderNumFull.split("|")[1].split("|")[0].trim();
  91  |       console.log(orderNum);
  92  | 
  93  |       await page.locator(".btn.btn-custom[routerlink='/dashboard/myorders']").click();
  94  |       //await page.waitForLoadState('networkidle');
  95  | 
  96  |       await page.locator("h1[class='ng-star-inserted']").waitFor();
  97  | 
  98  |       const ordersTable = await page.locator("tbody");
  99  |       const numOrders = await ordersTable.locator("tr").count();
  100 |       console.log(numOrders);
  101 |       let rowFound = -1;
  102 | 
  103 |       for (let i = 0; i < numOrders; i++) {
  104 |          const tempOrderNum = await ordersTable.locator("tr").nth(i).locator("th").textContent();
  105 |          console.log(tempOrderNum);
  106 |          if (tempOrderNum === orderNum) {
  107 |             console.log("The order was found at the following row: " + i);
  108 |             rowFound = i;
  109 |             break;
  110 |          }
  111 |       }
  112 | 
  113 | 
  114 |       await ordersTable.locator("tr").nth(rowFound).getByRole("button", { name: "View" }).click(); // getByRole seems to work very well
  115 | 
  116 |       await page.waitForLoadState('networkidle');
  117 |       await expect(await page.locator(".col-text.-main").textContent()).toBe(orderNum);
  118 | 
  119 | 
  120 | 
  121 |       //await page.pause();
  122 | 
  123 | 
  124 | 
  125 | 
  126 |    });
  127 | }
  128 | 
  129 | 
  130 |    customTest(`Client App login`, async ({ page, testDataForOrder }) => {
  131 |       //js file- Login js, DashboardPage
  132 |       const poManager = new POManager(page);
  133 |       // const email = "nickharrisonlce@gmail.com";
  134 |       // const password = "Password$1"
  135 |       // const productName = 'adidas original';
  136 |       const loginPage = poManager.getLoginPage();
  137 |       await loginPage.goTo();
  138 |       await loginPage.validLogin(testDataForOrder.username, testDataForOrder.password);
  139 |       const dashboardPage = poManager.getDashboardPage();
  140 |       await dashboardPage.searchProduct(testDataForOrder.productName);
  141 |       await dashboardPage.navigateToCart();
  142 | 
  143 |       const checkoutRow = await page.locator("li.totalRow", { hasText: "Checkout" });
  144 |       await checkoutRow.locator(".btn.btn-primary").click();
  145 |       //await page.pause();
  146 | 
  147 |       const emailInput = await page.locator("input.input.txt.input.txt.text-validated.ng-untouched.ng-pristine.ng-valid").inputValue();
  148 |       expect(emailInput).toBe(testDataForOrder.username);
  149 |       const emailLabel = await page.locator("label[type='text']");
  150 |       expect(emailLabel).toHaveText(testDataForOrder.username);
  151 | 
  152 |       const ccInput = page.locator('div.field', { has: page.locator('div.title', { hasText: 'Credit Card Number' }) }).locator('input');
  153 |       await ccInput.fill('4542 9931 9292 2293');
  154 | 
  155 |       const expiryDropdowns = await page.locator("div.field.small", { has: page.locator('div.title', { hasText: "Expiry Date" }) });
  156 |       const monthDropdown = expiryDropdowns.locator("select.input.ddl").first();
  157 |       const dayDropdown = expiryDropdowns.locator("select.input.ddl").nth(1);
  158 | 
  159 |       await expect(monthDropdown).toBeVisible();
  160 |       await monthDropdown.selectOption({ label: "05" });
  161 |       await dayDropdown.selectOption({ label: "14" });
  162 | 
  163 |       const cvv = await page.locator("div.field.small", { has: page.locator("div.title", { hasText: "CVV Code" }) }).locator("input.input.txt");
  164 |       await cvv.fill("999");
  165 | 
  166 | 
  167 |       const nameOnCard = await page.locator("div.field", { has: page.locator("div.title", { hasText: "Name on Card" }) }).locator("input.input.txt");
  168 |       await nameOnCard.fill("Nicholas O Harrison");
  169 | 
  170 |       //const applyCoupon = await page.locator("div.field.small", {has: page.locator("div.title", {hasText: "Apply Coupon"})}).locator("[name*='coupon']");
  171 |       const applyCoupon = await page.locator("[name*='coupon']");
  172 |       await applyCoupon.fill("rahulshettyacademy");
  173 | 
  174 |       const couponBtn = await page.locator("button[type='submit']");
  175 |       await couponBtn.click();
  176 |       await page.waitForLoadState('networkidle');
  177 |       const couponAppliedText = await page.locator(".mt-1.ng-star-inserted").textContent();
  178 |       await expect(couponAppliedText).toBe("* Coupon Applied");
  179 | 
  180 |       const countryBox = await page.locator("[placeholder*= 'Select Country']");
  181 |       countryBox.pressSequentially("united");
  182 |       const dropdown = page.locator(".ta-results");
  183 |       await dropdown.waitFor();
  184 |       const optionsCount = await dropdown.locator("button").count();
  185 |       for (let i = 0; i < optionsCount; i++) {
  186 |          const text = await dropdown.locator("button").nth(i).textContent();
  187 |          if (text === " United States") {
  188 |             await dropdown.locator("button").nth(i).click();
```