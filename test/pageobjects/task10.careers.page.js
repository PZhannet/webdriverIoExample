class CareersPage{
    
    get careers () {
        return $('/html/body/footer/div[1]/div/div[5]/ul/li[3]/a');
    }

    get openPositions () {
        return $('[href="#positions"]');
    }

    get design () {
        return $('//*[@id="design"]/div/h3/button/span[1]');
    }

    get engineering(){
        return $('//*[@id="engineering"]/div/h3/button/span[1]');
    }

    get finance(){
        return $('//*[@id="finance"]/div/h3/button/span[1]');
    }


    get marketing(){
        return $('//*[@id="marketing"]/div/h3/button/span[1]');
    }

    get operations(){
        return $('//*[@id="operations"]/div/h3/button/span[1]');
    }

    get product(){
        return $('//*[@id="product"]/div/h3/button/span[1]');
    }

    get sales(){
        return $('//*[@id="sales"]/div/h3/button/span[1]');
    }

    get security(){
        return $('//*[@id="security"]/div/h3/button/span[1]');
    }

    get support(){
        return $('//*[@id="support"]/div/h3/button/span[1]');
    }

    async openCareers () {
       
        await this.careers.click();
        await this.openPositions.click();
    }
    async designText () {
        return this.design.getText();
    }

    async engineeringText(){
        return this.engineering.getText();
    }

    async financeText(){
        return this.finance.getText();
    }


    async marketingText(){
        return this.marketing.getText();
    }

    async operationsText(){
        return this.operations.getText();
    }

    async productText(){
        return this.product.getText();
    }

    async salesText(){
        return this.sales.getText();
    }

    async securityText(){
        return this.security.getText();
    }

    async supportText(){
        return this.support.getText();
    }

    
}

module.exports = new CareersPage();