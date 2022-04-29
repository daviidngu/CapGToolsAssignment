
const base_url = require("../test_configs").base_url




class home_page {



    get sign_in_btn () {
        return $('#nav-link-accountList');
    }


    async nav_to_login (username, password) {

        await this.sign_in_btn.click();
    }


    open_home_page() {
        browser.url(base_url);
    };
}

module.exports = new home_page();