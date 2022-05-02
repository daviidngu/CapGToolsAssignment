
const base_url = require("../test_configs").base_url
const search_term = require("../test_configs").search_term


class home_page {



    get sign_in_btn () {
        return $('=Sign In/Up');
    }



    async nav_to_signIn (username, password) {

        await this.sign_in_btn.click();
    }

    get searchBar(){
        return $('[name = "searchTerm"]');
    }



    get searchExecute(){
        return $('[role = button]');
    }


    async searchBook(){
        await this.searchBar.click();

        await this.searchBar.setValue(search_term)
        await this.searchBar.keys('Enter')
     

        


    }

    open_home_page() {
        browser.url(base_url);
    };
}

module.exports = new home_page();