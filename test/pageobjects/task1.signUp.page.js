class InputPage {
    get emailInput() {
       return $('[id="email"]')
    }
    get passwordInput(){
        return $('[id="password"]');
    }
    get userNameInput(){
        return $('[id="login"]');
    }
    get optInInput(){
        return $('[id="opt_in"]');
    }

    get continueEmailButton(){
        return $('[data-optimizely-event*="continue.email"]');
    }
    get continuePasswordButton(){
        return $('//*[@id="password-container"]/div[2]/button');
    }
    get continueUserNameButton(){
        return $('//*[@id="username-container"]/div[2]/button');
    }
    get optInNameButton(){
        return $('//*[@id="opt-in-container"]/div[2]/button');
    }

    async valueInput (email, user) {
        await this.emailInput.setValue(email+'@gmail.com');
        await browser.pause(4000);
        await this.continueEmailButton.click();
        await this.passwordInput.setValue(email+'Ad23');
        await browser.pause(4000);
        await this.continuePasswordButton.click();
        await this.userNameInput.setValue('skiiiiiiiipppppp');
        await browser.pause(4000);
        await this.continueUserNameButton.click();
        await this.optInInput.setValue('n')
        await browser.pause(4000);
        await this.optInNameButton.click();
	
       
    }


}
module.exports=new InputPage ()