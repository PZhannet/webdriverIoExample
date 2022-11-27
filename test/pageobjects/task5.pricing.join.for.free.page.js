class PricingJoinForFreePage{
    
    get pricing () {
        return $('/html/body/div[1]/header/div/div[2]/div/nav/ul/li[4]/a');
    }
    get joinForFree(){
        return $('/html/body/div[4]/main/div[2]/div[2]/div[1]/div[1]/div/div/div[1]/div[3]/a');
    }

    

    get inputUsername () {
        return $('//*[@id="user_login"]');
    }

    get inputPassword () {
        return $('//*[@id="user_password"]');
    }

    get inputEmail () {
        return $('//*[@id="user_email"]');
    }

    async inputValue (input,username) {
        await this.inputUsername.setValue(username);
        await this.inputEmail.setValue(input+'@gmail.com');
        await this.inputPassword.setValue(input+'Ds23!');
        
    }

    
}

module.exports = new PricingJoinForFreePage();