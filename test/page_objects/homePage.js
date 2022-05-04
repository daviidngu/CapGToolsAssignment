
const baseUrl = require("../testConfigs").baseUrl
const searchTerm = require("../testConfigs").searchTerm
const click = require('../Utilities').click
const openBrowser = require('../utilities').openBrowser
const textInput = require('../utilities').textInput
class homePage {



    get signInBtn () {
        return $('=Sign In/Up');
    }



    async navToSignIn (username, password) {

        await click(this.signInBtn);
    }

    get bagBtn(){
        return $('#header-top-bar-bag')
    }

    async navToBag (username, password) {

        await click(this.bagBtn);
    }



    get searchBar(){
        return $('[name = "searchTerm"]');
    }



    get searchExecute(){
        return $('[role = button]');
    }


    async searchBook(searchKey = searchTerm){
        await click(this.searchBar);
        await textInput(this.searchBar, [searchKey, 'Enter'])
        //await this.searchBar.keys('Enter')
        
     

        


    }

    async openHomePage() {
        await openBrowser(baseUrl);
        
    };
}

module.exports = new homePage();