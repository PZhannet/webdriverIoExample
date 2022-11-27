class CheckText{
    
    get username () {
        return $('//*[@id="captcha-and-submit-container"]/div[1]');
    }

    

    async CheckText () {
        return this.username.getText();
      
    }

    
}

module.exports = new CheckText();