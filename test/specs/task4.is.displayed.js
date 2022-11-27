const MoveToObjectPage= require('../pageobjects/task4.moveTo.object.page')


describe.skip('task4 is displayed',()=>{
    it('object is displayed', async ()=>{
        await browser.url('https://github.com/')
        await MoveToObjectPage.productIsVisible();
        console.log('Product Button is visible:'+ await MoveToObjectPage.productIsVisible())
        
        await MoveToObjectPage.solutionsIsVisible();
        console.log('Solutions Button is visible:'+ await MoveToObjectPage.solutionsIsVisible())

        await MoveToObjectPage.openSourceIsVisible();
        console.log('Open Source Button is visible:'+ await MoveToObjectPage.openSourceIsVisible())
        await browser.pause(3000);
    })
})