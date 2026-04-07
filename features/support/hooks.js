const { expect } = require('@playwright/test');
const playwright = require('@playwright/test');
const { Before, After, BeforeStep, AfterStep, Status } = require('@cucumber/cucumber')
const { POManager } = require("../../pageObjects/POManager");


Before({ timeout: 30 * 1000 }, async function () {
    const browser = await playwright.chromium.launch({
        headless: true
    });
    this.browser = browser;
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    this.poManager = new POManager(this.page);

});

BeforeStep(function () {
  // This hook will be executed before all steps in a scenario with tag @foo
});

AfterStep(async function ({result}) {
  if(result.status === Status.FAILED)
  {
    await this.page.screenshot({path: "screenshot1.png"});
  }

});


After(function () {
    console.log("I am the last to execute");

});