import {expect, type Locator, type Page} from '@playwright/test';

export class DashboardPage {
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

