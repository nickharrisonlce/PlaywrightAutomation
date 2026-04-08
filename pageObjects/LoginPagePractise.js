class LoginPagePractise {

    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByRole('textbox', { name: 'Username:' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password:' });
        this.termsCheckbox = page.getByRole('checkbox', { name: 'I Agree to the terms and' });
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
    }

    async goTo() {
        await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.termsCheckbox.check();
        await this.signInButton.click();
        
        // Wait for navigation to shop page
        await this.page.waitForURL("**/angularpractice/shop");
    }
}

module.exports = { LoginPagePractise };
