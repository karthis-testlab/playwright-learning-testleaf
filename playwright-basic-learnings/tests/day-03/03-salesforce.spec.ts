import { chromium, firefox, test, webkit } from "@playwright/test";

test("01 - launch the salesforce application in the chrome browser", async () => {

    const browser = await chromium.launch({channel: "chrome"});
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://login.salesforce.com/");
    await page.close();
    await browserContext.close();
    await browser.close();

});

test("02 - launch the salesforce application in the firefox browser", async () => {

    const browser = await firefox.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://login.salesforce.com/");
    await page.close();
    await browserContext.close();
    await browser.close();

});

test("03 - launch the salesforce application in the webkit", async () => {

    const browser = await webkit.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://login.salesforce.com/");
    await page.close();
    await browserContext.close();
    await browser.close();

});

test("04 - launch the salesforce application in the edge browse", async () => {

    const browser = await chromium.launch({channel: "msedge"});
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://login.salesforce.com/");
    await page.close();
    await browserContext.close();
    await browser.close();

});