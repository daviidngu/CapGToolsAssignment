
const user_details = require("../test_configs").login_details;

const invalid_user_details = require("../test_configs").invalid_login_details;
class signIn_page {



    get inputEmail () {
        return $('#emailLogin');
    }

    get inputPassword () {
        return $('#password');

    }

    get invalid_login_message(){
        return $("#error-message")

    }

    get signInbtn(){
        return $('#sign-in-btn');
    }

    async login (username, password) {

        await this.inputEmail.setValue(user_details.username);
        await this.inputPassword.setValue(user_details.password);
        await this.signInbtn.click();

    }

    async invalid_login (username, password) {

        await this.inputEmail.setValue(invalid_user_details.username);
        await this.inputPassword.setValue(invalid_user_details.password);
        await this.signInbtn.click();

    }



}

module.exports = new signIn_page();