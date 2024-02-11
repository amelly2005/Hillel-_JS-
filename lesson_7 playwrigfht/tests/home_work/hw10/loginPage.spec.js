import { test, chromium, } from '@playwright/test';
import { HomePage } from "./Locators_HomePage"


let login_data = [
    {
        email: "Ammmelly202225@gmail.",
        password: "2j2h4hj4h4jh0",
        result: "Invalid email address",
        locator: `//li[@class="validation-messages__item ng-star-inserted"]`,
    },

    {
        email: "2225@gmail.com",
        password: "jdhjjdhjhdf ",
        result: " Incorrect email or password",
        locator: `//p[@class="page-login__actions-validation ng-star-inserted"]`,
    }

]

let login_data_pos = [
    {
        email: "  ", // type valid email  and password 
        password: "  ",
        locator: `//h2[@class="dashboard-groups-header__title" ]`,
    }

]

login_data.forEach(({email, password, result, locator})=>{
    test (`check error message ${email}` ,async()=>{
        const browser= await chromium.launch();
        const page = await browser.newPage();
        let homePage = new HomePage(page)
        await homePage.doLogin(email, password, result, locator)
        await page.close()
        await browser.close()
    })
    
});

login_data_pos.forEach(({email, password, result, locator})=>{
    test (`"Login to account" ${email}` ,async()=>{
        const browser= await chromium.launch();
        const page = await browser.newPage();
        let homePage = new HomePage(page)
        await homePage.goHomePage(email, password, result, locator)
        await page.close()
        await browser.close()
    })
    
});