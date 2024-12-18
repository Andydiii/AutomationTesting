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

        await driver.sleep(1000);
        
        // ********************************************************************************************************************

        // go order product page
        const selectAccountXPath = "/html/body/div[2]/div/h2";

        await driver.findElement(By.linkText("Order Product")).click();

        await driver.sleep(2000);

        // ********************************************************************************************************************

        // select account and enter
        await driver.findElement(By.id("accountIdentifier00")).click();

        await driver.findElement(By.id("btnEnter")).click();
        
        await driver.sleep(2000);

        // ********************************************************************************************************************

        // select "immediate signle online" and select product then press enter
        await driver.findElement(By.id("singleOnline")).click();

        await driver.findElement(By.xpath("/html/body/div[2]/div/form/table/tbody/tr[1]/td/fieldset/table/tbody/tr/td[2]/table/tbody/tr[1]/td[3]/select/option[2]")).click();

        await driver.findElement(By.id("btnEnter")).click();
        
        await driver.sleep(2000);

        // complete search criteria
        await driver.findElement(By.xpath("/html/body/div[2]/div/form/table/tbody/tr[1]/td/fieldset/table/tbody/tr[1]/td[1]/select/option[3]")).click();
        await driver.findElement(By.name("singleCriteria.criteriaDate")).sendKeys("2024-11-02");

        await driver.findElement(By.id("subTypeSelection1")).click();
        await driver.findElement(By.xpath("/html/body/div[2]/div/form/table/tbody/tr[1]/td/fieldset/table/tbody/tr[2]/td[1]/select/option[4]")).click();
        await driver.findElement(By.id("subSearchType")).sendKeys("AB123");

        await driver.findElement(By.id("confirm_button")).click();

        await driver.sleep(2000);

        // *********************************************************************************************************
        // check if completed without err
        let orderNumber;
        try {
            orderNumber = await driver.findElement(By.xpath("/html/body/div[2]/div[2]/div/table/tbody/tr[1]/td/table/tbody/tr[1]/td[1]")).getText().then((value) => {
                return value;
            });
        } catch(err) {
            if (error.name === 'NoSuchElementError') {
                console.log("ordering product faield");
            }
        }

        // *********************************************************************************************************
        // close the browser.
        await driver.quit();

        
    });
});