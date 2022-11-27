const topicsPage = require('../pageobjects/task6.topics.page')

describe.skip ('task6 page topics',()=>{
    it('check "topics" text:', async ()=>{
        await browser.url('https://github.com/')
        await topicsPage.topicsIsVisible();
        await browser.pause(3000);
        console.log('Topics is visible: '+ await topicsPage.topicsIsVisible())
       
    })
})