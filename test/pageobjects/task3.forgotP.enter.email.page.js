class EnterEmailPage{
    
    get emailLinck () {
        return $('[id="email_field"]');
    }

    get sendpassword () {
        return $('//*[@id="forgot_password_form"]/div[3]/input[2]');
    }

    
    async enterEmail (mail) {
        await this.emailLinck.setValue(mail);
      
    }
    
}

module.exports = new EnterEmailPage();