// selenium key words, need to requrie first before use
const {Builder, By, Key} = require("selenium-webdriver");
const assert = require("assert");
const {Select} = require("selenium-webdriver");

// input INFO
const {USER_INFO, OrderProductC1, deliveryMethod} = require('../testingConstants');
const {product} = require('../testingConstants');


describe(`Order Product ${product}` , function() {
    if ((deliveryMethod === 'single') && (OrderProductC1.orderableproduct.includes(product))) {
        it(`Order single ${product}`, async function() {
            // launch the browser
            let driver = await new Builder().forBrowser("chrome").build(); 
    
            // navigate to our application
            await driver.get("https://dev.aris.mto.gov.on.ca/edtW/login/login.jsp");
    
            // input
            await driver.findElement(By.id("userId")).sendKeys(USER_INFO.userid);
            await driver.sleep(2000);
            await driver.findElement(By.id("password")).sendKeys(USER_INFO.password, Key.RETURN);
            await driver.sleep(2000);

            let Text = await driver.findElement(By.xpath("/html/body/div[2]/table/tbody/tr/td[1]/ul/li[1]/a")).getText().then(function(value){
                return value;
            });
    
            await driver.sleep(2000);
            // assert using node assertion
            assert.strictEqual(Text, "Order Product");
    
            await driver.sleep(1000);
            
            // ********************************************************************************************************************
    
            // go order product page
    
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

            // select coressponding option
            const dropdown = await driver.findElement(By.id("single"));
            const selectDropDown = await new Select(dropdown);

            if (product === 'CRC999') {
                await selectDropDown.selectByVisibleText('CRC999 - Certified Collision Report - Police');
            } else {
                await selectDropDown.selectByVisibleText('CRU999 - Collision Report - Police');
            }

            await driver.sleep(2000);
            
            //click enter
            await driver.findElement(By.id("btnEnter")).click();

            await driver.sleep(2000);

            // ********************************************************************************************************************
            // complete search criteria 1
            const searchCriteria1 = OrderProductC1.searchCriteria1; 
            const CriteriaDropDown1 = await driver.findElement(By.id('typeSelection1'));
            const selectCriteriaDropDown1 = await new Select(CriteriaDropDown1);
            await selectCriteriaDropDown1.selectByVisibleText(searchCriteria1);
            await driver.sleep(2000);

            const searchCriteria1_value = OrderProductC1.searchCriteria1_value;
            await driver.findElement(By.name("singleCriteria.criteriaDate")).sendKeys(searchCriteria1_value);
            await driver.sleep(2000);
    
            if (searchCriteria1 === 'Collision Date') {
                // select second criteria and fill input
                const searchCriteria2 = OrderProductC1.searchCriteria2;
                const CriteriaDropDown2 = await driver.findElement(By.id('subTypeSelection1'));
                const selectCriteriaDropDown2 = await new Select(CriteriaDropDown2);
                await selectCriteriaDropDown2.selectByVisibleText(searchCriteria2);
                await driver.sleep(2000);

                const searchCriteria2_value = OrderProductC1.searchCriteria2_value;
                await driver.findElement(By.id("subSearchType")).sendKeys(searchCriteria2_value);
                await driver.sleep(2000);
            }
            
            // fill reference
            await driver.findElement(By.id('ref')).sendKeys('Test');
            await driver.sleep(2000);

            // select Authorized Use
            const AuthorizedUse = OrderProductC1.AuthorizedUse;
            const CriteriaDropDown2 = await driver.findElement(By.id('authUse'));
            const selectCriteriaDropDown2 = await new Select(CriteriaDropDown2);
            await selectCriteriaDropDown2.selectByVisibleText(AuthorizedUse);

            await driver.sleep(2000);

            // process order
            await driver.findElement(By.id('confirm_button')).click();
    
            // *********************************************************************************************************
            // check if completed without err
            let orderNumber;
            try {
                const orderNumber = await driver.findElement(By.xpath("//td[text() = 'Order #:']/following-sibling::td")).getText().then(value => value);
                console.log(`Order Number: ${orderNumber}`);
                await driver.sleep(2000);
            } catch(err) {
                if (err.name === 'NoSuchElementError') {
                    console.log("ordering product faield");
                }
            }
            await driver.sleep(2000);
    
            // *********************************************************************************************************
            // close the browser.
            await driver.quit();
        });
    }

    else if ((deliveryMethod === 'single') && (OrderProductC2.orderableproduct.includes(product))) {

    }
});