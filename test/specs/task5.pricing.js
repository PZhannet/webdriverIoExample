const pricingJoinForFreePage =require('../pageobjects/task5.pricing.join.for.free.page')

describe.skip ('task5 page pricing',()=>{
    it('sign in pricing', async ()=>{
        await browser.url('https://github.com/')
        await pricingJoinForFreePage.pricing.click();
        await pricingJoinForFreePage.joinForFree.click();

        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        function generateString(length) {
            let result = ' ';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            
            return result;
        }
        
        await pricingJoinForFreePage.inputValue(generateString(10))
        await browser.pause(3000);
    })
})