const searchGitHub = require('../pageobjects/task7.search.github')
const assert = require('assert')

describe ('task7 Search GitHub',()=>{
    it('Search GitHub:', async ()=>{
        await browser.url('https://github.com/')
        await searchGitHub.githubSearch('webdriverio')
        await browser.pause(3000);
        
        console.log('Url contains "webdriverio" text:'+await browser.getUrl())
        assert.notDeepEqual(await browser.getUrl(),'webdriverio')
        
    })
})