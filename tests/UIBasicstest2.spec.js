const {test, expect} = require ('@playwright/test');


test('example test with notes', async ()=> {
    // => operator removes the need for function() -- test('First Playwright test', async function() { 
    //playwright code 
    // step1
    // step2
    // step3
    // javascript does not wait for a previous step to complete, you must use await
    // await is only activated with "async"
});


test('Browser context Playwright test', async ({browser})=> {
    //chrome may automatically have plugins/cookies - we need to create a fresh context (alomst like incognito)
    
    const context = await browser.newContext();
    const page = await context.newPage();

    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");

    const cardTitles = page.locator(".card-body a");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('#username').fill("rahulshetty"); // use fill, type is deprecated
    await page.locator("[type='password']").fill("Learning@830$3mK2");
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    // console.log(await page.locator(".card-body a").first().textContent()); // or .first()
    // console.log(await cardTitles.nth(1).textContent()); // second element with new variable

    // await page.waitForLoadState('networkidle'); // DISCOURAGED waits for all network calls to be completed (DYNAMICALLY)
    await page.locator(".card-body a").last().waitFor(); // waits for last item of class card-body and parent tag a to be loaded
    const allTitles = await cardTitles.allTextContents(); // will return an empty array unless we wait
    console.log(allTitles);

    


});


test.only('UI Controls', async ({page})=> {
    
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const dropdown = page.locator("select.form-control");
    const documentLink = page.locator("[href*='documents']");
    await dropdown.selectOption("consult");
    // await page.pause();
  

    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await page.locator("#terms").click();
    console.log(await page.locator("#terms").last().isChecked());
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();

    await expect(documentLink).toHaveAttribute("Class", "blinkingText");

});