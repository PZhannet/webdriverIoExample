class EnterprisePage{
 
    get enterprise () {
        return $('/html/body/div[4]/main/div[1]/div[2]/div/div/div[2]/div[2]/a');
    }
    get enterpriseCloud(){
        return $('/html/body/div[4]/main/div/div[2]/div/div/div[1]/a/div/div')
    }
  

    async signInEnterprise (search) {
       
        await this.enterprise.click();
        await this.enterpriseCloud.click();
        
        
    }
    
    
}
module.exports = new EnterprisePage();