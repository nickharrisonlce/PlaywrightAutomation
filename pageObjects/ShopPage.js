class ShopPage {

    constructor(page) {
        this.page = page;
    }

    getProductHeading(productName) {
        return this.page.locator('h4', { hasText: productName });
    }
}

module.exports = { ShopPage };
