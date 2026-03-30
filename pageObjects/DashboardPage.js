class DashboardPage {

    constructor(page) {
        this.page = page;
        this.products = page.locator(".card-body");
        this.productsText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='/dashboard/cart']");
    }

    async searchProduct(productName) {
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