const signUpPage = require('../pageobjects/task1.signUp.page')
const task1CheckTextPage = require('../pageobjects/task1.check.text.page')
const assert = require('assert')

describe.skip ('Sign Up TestCase', () => {	
    it('Insert credentials', async () => {
        await browser.url('https://github.com/')
        const signUpButton= await $('[class*=" HeaderMenu-link--sign-up "]')
        await signUpButton.click();
        await browser.pause(15000);
        
        
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        function generateString(length) {
            let result = ' ';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            
            return result;
        }
       
        await signUpPage.valueInput(generateString(10))
        await browser.pause(5000);
    })
    it('Verify page url', async()=>{
        console.log('URL:'+await browser.getUrl())
        assert.strictEqual(await browser.getUrl(),'https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home');
        
    })
    it('Verify page text', async()=>{
        console.log('text:'+await task1CheckTextPage.CheckText())
        assert.strictEqual(await task1CheckTextPage.CheckText(),'Verify your account');
        
    })
})
        