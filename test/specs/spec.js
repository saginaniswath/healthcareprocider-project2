//const loginPage = require('..//pageobjects/login.page');
const LoginPage = require('..//pageobjects//login.page');
describe('login page validation',()=>{
    it("click on the menu bar",async()=>
    {
        await LoginPage.open();
        await (LoginPage.clickonmenu).click();


    });

});

