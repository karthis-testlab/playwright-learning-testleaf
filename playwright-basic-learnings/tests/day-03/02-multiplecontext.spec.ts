import { chromium, firefox, test } from "@playwright/test";

test("Test multiple context", async () => {
    
    const browser = await chromium.launch({channel: 'chrome'});

    const browserContext1 = await browser.newContext();
    const leafGround = await browserContext1.newPage();
    await leafGround.goto("https://leafground.com");
    await leafGround.waitForTimeout(5000);
    await leafGround.close();
    const google = await browserContext1.newPage();
    await google.goto("https://www.google.com/");
    await google.close();
    await browserContext1.close();

    const browserContext2 = await browser.newContext();
    const sauceDemo = await browserContext2.newPage();
    await sauceDemo.goto("https://www.saucedemo.com/");
    await sauceDemo.waitForTimeout(2000); 
    await sauceDemo.close();
    await browserContext2.close();

    await browser.close();

});