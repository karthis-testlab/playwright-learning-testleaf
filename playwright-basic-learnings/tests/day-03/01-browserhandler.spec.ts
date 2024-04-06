import { chromium, firefox, test } from "@playwright/test";

test("01 - Browser Handler Test to launch the chrome browser", async () => {

    // To launch the chromium browser
    const browser = await chromium.launch({channel: "chrome"});

    // Create a browser context
    const browserContext = await browser.newContext();

    // Create a page
    const page = await browserContext.newPage();

    // Load a URL
    await page.goto("https://leafground.com");

    await page.waitForTimeout(5000);

    // Close the page
    await page.close();

    // Close the browser context
    await browserContext.close();

    // Close the browser instance
    await browser.close();

    //https://login.salesforce.com/

});

test("02 - Browser Handler Test to launch the firefox browser", async () => {

    // To launch the chromium browser
    const browser = await firefox.launch();

    // Create a browser context
    const browserContext = await browser.newContext();

    // Create a page
    const page = await browserContext.newPage();

    // Load a URL
    await page.goto("https://leafground.com");

    await page.waitForTimeout(5000);

    // Close the page
    await page.close();

    // Close the browser context
    await browserContext.close();

    // Close the browser instance
    await browser.close();

});