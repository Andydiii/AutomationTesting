// selenium key words, need to requrie first before use
const {Builder, By, Key} = require("selenium-webdriver");
const assert = require("assert");

const {USER_INFO} = require('../testingConstants');

async function login() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    // navigate to our application
    await driver.get("https://dev.aris.mto.gov.on.ca/edtW/login/login.jsp");

    // add a todo
    await driver.findElement(By.id("userId")).sendKeys(USER_INFO.userid);
    await driver.sleep(2000);
    await driver.findElement(By.id("password")).sendKeys(USER_INFO.password, Key.RETURN);
    await driver.sleep(2000);

    // assert
    let Text = await driver.findElement(By.xpath("/html/body/div[2]/table/tbody/tr/td[1]/ul/li[1]/a")).getText().then(function(value){
        return value;
    });

    await driver.sleep(2000);
    // assert using node assertion
    await assert.strictEqual(Text, "Order Product");

    await driver.sleep(2000);

    // close the browser.
    await driver.quit();
};