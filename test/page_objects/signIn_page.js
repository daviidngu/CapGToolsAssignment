
const user_details = require("../test_configs").login_details;
class signIn_page {



    get inputEmail () {
        return $('#ap_email');
    }

    get continue(){
        return $('#continue');
    }

    get inputPassword () {
        return $('#ap_password');

    }

    get sign_in_submit_btn(){
        return $('#signInSubmit');
    }

    async login (username, password) {

        await this.inputEmail.setValue(user_details.username);
        await this.continue.click();

        await this.inputPassword.setValue(user_details.password);
        await this.sign_in_submit_btn.click();

    }



}

module.exports = new signIn_page();