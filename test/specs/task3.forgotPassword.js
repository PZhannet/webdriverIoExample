const forrotPenteremailpage= require('../pageobjects/task3.forgotP.enter.email.page')

describe.skip('Test SignIn',()=>{  //kipped task because of the captcha
    it('SignIn', async ()=>{
        await browser.url('https://github.com/')
        const signinbutton= await $('/html/body/div[1]/header/div/div[2]/div/div/div[2]/a')
        await signinbutton.click();    
        const forgotPasswordButton= await $('[href="/password_reset"]')
        await forgotPasswordButton.click();
        await browser.pause(20000);
        await forrotPenteremailpage.enterEmail('testtestgithub99@gmail.com')
        await browser.pause(20000);
        const y = await $('//*[@id="home_children_button"]') 
        await y.click();

    })
})