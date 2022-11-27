class EnterpriseServerPage{
 
    get enterpriseServer () {
        return $('/html/body/div[4]/main/div/div[2]/div/div/div[2]/a/div/div/div[2]/h2');
    }
    get name(){
        return $('//*[@id="contact_request_name"]')
    }
    get company(){
        return $('//*[@id="contact_request_organization_name"]')
    }
    get workEmail(){
        return $('//*[@id="contact_request_email"]')
    }
    get phoneNumber(){
        return $('//*[@id="contact_request_phone"]')
    }
    get deployGitHub(){
        return $('//*[@id="contact_request_instance_type_aws"]')
    }
    get yes(){
        return $('//*[@id="questions_yes"]')
    }
    get acceptTerms(){
        return $('//*[@id="contact_request_agreed_to_terms"]')
    }
    get questions(){
        return $('//*[@id="questions-list"]')
    }


  

    async EnterpriseServer (value,value1,number,question) {
       
        await this.enterpriseServer.click();
        await this.name.setValue(value);
        await this.company.setValue(value1);
        await this.workEmail.setValue(value+'@github.com');
        await this.phoneNumber.setValue('+38067'+number);
        await this.deployGitHub.click();
        await this.yes.click();
        await this.acceptTerms.click();
        await this.questions.setValue(question)
        
        
        
    }
    
    
}
module.exports = new EnterpriseServerPage();