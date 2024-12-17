// selenium key words, need to requrie first before use
const {Builder, By, Key} = require("selenium-webdriver");
const assert = require("assert");

const {USER_INFO} = require('../testingConstants');

describe("OrderProduct" , function() {

    it("Order single", async function() {
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
        assert.strictEqual(Text, "Order Product");

        await driver.sleep(2000);
        
        // ********************************************************************************************************************

        // go order product page
        const selectAccountXPath = "/html/body/div[2]/div/h2";

        driver.findElement(By.linkText("Order Product")).click();

        await driver.sleep(2000);

        // ********************************************************************************************************************

        // select account and enter
        driver.findElement(By.id("accountIdentifier00")).click();

        driver.findElement(By.id("btnEnter")).click();
        
        await driver.sleep(2000);

        // ********************************************************************************************************************

        // select "immediate signle online" and select product 
        driver.findElement(By.id(singleOnline)).click();

        driver.findElement(By.xpath("/html/body/div[2]/div/form/table/tbody/tr[1]/td/fieldset/table/tbody/tr/td[2]/table/tbody/tr[1]/td[3]/select/option[2]")).click();

        driver.findElement(By.id(singleOnline)).click();



        // close the browser.
        await driver.quit();

        
    });
});