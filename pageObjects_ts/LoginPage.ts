import {expect, type Locator, type Page} from '@playwright/test';

export class LoginPage {

    page: Page;
    signInButton: Locator;
    userPassword: Locator;
    userEmail: Locator;
    
    constructor(page:any) {
        this.page = page;
        this.signInButton = page.locator("[value='Login']");
        this.userPassword = page.locator("#userPassword");
        this.userEmail = page.locator("#userEmail");
    }


    async validLogin(email: string, password: string) {
        await this.userEmail.fill(email);
        await this.userPassword.fill(password);
        await this.signInButton.click();

        await this.page.waitForLoadState('networkidle');
    }

    async goTo() {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }


}
