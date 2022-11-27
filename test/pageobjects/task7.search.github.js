class GitHubPage{
 
    get gitHub () {
        return $('[class*="form-control js-site-search-focus"]');
    }
    get search(){
        return $('[href*="https://github.com/search?"]');
    }
    get typeScript(){
        return $('/html/body/div[4]/main/div/div[2]/div[1]/ul/li[2]/a')
    }
    get firstResult(){
        return $('/html/body/div[4]/main/div/div[3]/div/ul/li[1]/div[2]/div[1]/div[1]/a')
    }

    async githubSearch (search) {
        
        await this.gitHub.setValue(search);
        await this.search.click();
        await this.typeScript.click();
        await this.firstResult.click();
        
    }
    
    
}
module.exports = new GitHubPage();