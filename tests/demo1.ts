import {expect, type Locator, type Page} from '@playwright/test';

let message1 : string = "Hello";
// message1 = 2; //ERROR

console.log(message1);

let age1 : number = 20;
let isActive : boolean = false;

let numbers1 : number[] = [1,2,3];

let data : any = "this could be anything";
data = 3;


function add1(a:number,b:number) : number
{
    return a + b;
}

console.log(add1(3,4));



let user1 : {name: string, age: number} = {name: "Bob", age: 34};
// user.location = "USA"; // ERROR


class DashboardPage {
    page: Page;
    products: Locator;
    productsText : Locator;
    cart: Locator
    constructor(page: Page) {
        this.page = page;
        this.products= page.locator(".card-body");
        this.productsText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='/dashboard/cart']");
    }

    async searchProduct(productName: string) {
        await this.productsText.first().waitFor();
        const titles = await this.productsText.allTextContents();
        const count = await this.products.count();
        console.log(titles);

        const itemCard = this.page.locator(".card", { hasText: productName });
        await itemCard.locator("button.btn.w-10.rounded").click();

    }


    async navigateToCart() {

        await this.cart.click();
        //await page.waitForLoadState('networkidle');
    }


}

module.exports = { DashboardPage };