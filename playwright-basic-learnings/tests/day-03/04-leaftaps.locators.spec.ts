import { chromium, test } from "@playwright/test";

test("01 - Handling locators in the leaftaps login page", async () => {

    const browser = await chromium.launch({channel: "chrome"});
    const browserContext = await browser.newContext();
    const leafTaps = await browserContext.newPage();

    await leafTaps.goto("http://leaftaps.com/opentaps/control/main");

    await leafTaps.locator("input#username").fill("demosalesmanager");
    await leafTaps.fill("input#password", "demosalesmanager");

    const title = await leafTaps.title();
    console.log(`The current page title is ${title}.`);

    const url = leafTaps.url();
    console.log(`The current page url is ${url}.`);
    
    

});