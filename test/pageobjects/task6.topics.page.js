class TopicsPage{
 
    get openSource () {
        return $('/html/body/div[1]/header/div/div[2]/div/nav/ul/li[3]/button');
    }
    get topics(){
        return $('/html/body/div[1]/header/div/div[2]/div/nav/ul/li[3]/div/ul[3]/li[2]/a');
    }
    get topicsText(){
        return $('/html/body/div[4]/main/div[2]/div/h1');

    }

    async topicsIsVisible () {
        await this.openSource.moveTo();
        await this.topics.moveTo();
        await this.topics.click();
        return this.topicsText.isDisplayed();
    

        
    }
    
    
}
module.exports = new TopicsPage();