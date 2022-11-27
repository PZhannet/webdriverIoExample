class MoveToObjectPage{
    
    get moveToProduct () {
        return $('/html/body/div[1]/header/div/div[2]/div/nav/ul/li[1]/button');
    }

    get  moveToSolutions () {
        return $('/html/body/div[1]/header/div/div[2]/div/nav/ul/li[2]/button');
    }

    get moveToOpenSource () {
        return $('/html/body/div[1]/header/div/div[2]/div/nav/ul/li[3]/button');
    }

    async productIsVisible () {
        await this.moveToProduct.moveTo();
        return this.moveToProduct.isDisplayed();

        
    }
    async solutionsIsVisible(){
        await this.moveToSolutions.moveTo();
        return this.moveToSolutions.isDisplayed();
    }

    async openSourceIsVisible(){
        await this.moveToOpenSource.moveTo();
        return this.moveToOpenSource.isDisplayed();
    }
    
}
module.exports = new MoveToObjectPage();