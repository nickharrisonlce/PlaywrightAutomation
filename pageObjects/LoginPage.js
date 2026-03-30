class LoginPage {

    constructor(page) {
        this.page = page;
        this.signInButton = page.locator("[value='Login']");
        this.userPassword = page.locator("#userPassword");
        this.userEmail = page.locator("#userEmail");
    }


    async validLogin(email, password) {
        await this.userEmail.fill(email);
        await this.userPassword.fill(password);
        await this.signInButton.click();

        await this.page.waitForLoadState('networkidle');
    }

    async goTo() {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }


}


module.exports = { LoginPage };