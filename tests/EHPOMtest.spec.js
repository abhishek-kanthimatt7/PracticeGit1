
const {test,expect} = require ('@playwright/test');
const loginPage = require ('../Pages/loginPage');
const logintestData = JSON.parse(JSON.stringify(require ('../testdata/EHUIlogintestdata.json')));

for(const data of logintestData)
{
test(`EHPOMlogintest for ${data.userName}`,async({page})=>{

    const login = new loginPage(page);
    await login.gotoURL(data.URL);
    await login.login(data.userName,data.password);
    await expect(page.locator("#event-card").first()).toBeVisible();
    expect(await page.title()).toBe("EventHub — Discover & Book Events");

})};