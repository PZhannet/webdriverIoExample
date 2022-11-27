const startEnterprise = require('../pageobjects/task8.start.enterprise')
const pricingJoinForFreePage =require('../pageobjects/task5.pricing.join.for.free.page')
const startEnterpriseServer = require('../pageobjects/task9.interprise.server')


describe.skip ('task8 Start Free Enterprise trial',()=>{
    it('Start Free enterprice:', async ()=>{
        await browser.url('https://github.com/')
        await startEnterprise.signInEnterprise();
        await browser.pause(3000);
    
        
    })
    it('SignIn Enterprise', async()=>{
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        function generateString(length) {
            let result = ' ';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            
            return result;
        }
        
        await pricingJoinForFreePage.inputValue(generateString(10),'skiiiiiipppppp')
        await browser.pause(3000);
    })

    it('Should change page to Enterprise Server', async()=>{
        await browser.back()
        
        
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        function generateString(length) {
            let result = ' ';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            
            return result;
        }
        
        const characters1 ='0123456789';
        function generatenumber(length) {
            let result = ' ';
            const charactersLength = characters1.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters1.charAt(Math.floor(Math.random() * charactersLength));
            }
            
            return result;
        }
        await startEnterpriseServer.EnterpriseServer(generateString(10),generateString(10),generatenumber(7),'How do you do:)?');
        await browser.pause(3000);
    })
})