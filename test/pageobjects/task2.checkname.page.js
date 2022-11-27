
class CheckName{
    
    get username () {
        return $('//*[@id="new_repository"]/div[1]/span');
    }

    

    async CheckUserName () {
        return this.username.getText();
      
    }

    
}

module.exports = new CheckName();