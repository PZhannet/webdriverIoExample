const task2loginpage= require('../pageobjects/task2.login.page')
const task2checkname = require('../pageobjects/task2.checkname.page')
const assert = require('assert')

describe.skip('Test SignIn',()=>{
    it('SignIn', async ()=>{
        await browser.url('https://github.com/')
        const signinbutton= await $('/html/body/div[1]/header/div/div[2]/div/div/div[2]/a')
        await signinbutton.click();    
        await task2loginpage.login('testtestgithub99@gmail.com','qwertyuiop789/*-')
        await browser.pause(20000);
        assert.strictEqual(await task2checkname.CheckUserName(),'Testunia911 /');
        assert.strictEqual(await browser.getUrl(),'https://github.com/');

    })
})