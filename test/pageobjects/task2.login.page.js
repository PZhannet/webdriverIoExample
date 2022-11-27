

class LoginPage{
    
    get inputUsername () {
        return $('//*[@id="login_field"]');
    }

    get inputPassword () {
        return $('//*[@id="password"]');
    }

    get btnSubmit () {
        return $('//*[@id="login"]/div[4]/form/div/input[11]');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    
}

module.exports = new LoginPage();