import { chromium, test } from "@playwright/test";

test("Create lead by using locator methods", async () => {

    const browser = await chromium.launch({channel: "chrome"});
    const browserContext = await browser.newContext();
    const leafTaps = await browserContext.newPage();

    await leafTaps.goto("http://leaftaps.com/opentaps/control/main");

    await leafTaps.locator("input#username").fill("demosalesmanager");
    await leafTaps.fill("input#password", "crmsfa");
    await leafTaps.click("input.decorativeSubmit");
    await leafTaps.getByText("CRM/SFA").click();
    //await leafTaps.getByRole('link', {name: "Leads"}).click();
    await leafTaps.getByText("Create Lead").click();
    await leafTaps.locator("input#createLeadForm_companyName").fill("TestLeaf");
    await leafTaps.fill("input#createLeadForm_firstName", "FirstName");
    await leafTaps.fill("input#createLeadForm_lastName", "LastName");
    await leafTaps.click("input[value='Create Lead']");
    console.log(await leafTaps.locator("span#viewLead_companyName_sp").innerText());
    

});