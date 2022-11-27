const careers = require('../pageobjects/task10.careers.page')

describe.skip ('Test Careers',()=>{
    it('Print careers', async ()=>{
        await browser.url('https://github.com/')
        await careers.openCareers();
        await browser.pause(3000);
        console.log('Positions list:', await  careers.designText(), await careers.engineeringText(), 
        await careers.financeText(), await careers.marketingText(),
        await careers.operationsText(), await careers.productText(), await careers.salesText(),
        await careers.securityText(), await careers.supportText());
        
    })
})