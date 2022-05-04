
const userDetails = require("../testConfigs").loginDetails;
const click = require('../Utilities').click
const invalidUserDetails = require("../testConfigs").invalidLoginDetails;
const textInput = require('../utilities').textInput
class signInPage {



    get inputEmail () {
        return $('#emailLogin');
    }

    get inputPassword () {
        return $('#password');

    }

    get invalidLoginMessage(){
        return $("#error-message")

    }

    get signInbtn(){
        return $('#sign-in-btn');
    }

    async login (username, password) {


        await textInput(this.inputEmail, userDetails.username)
        await textInput(this.inputPassword, userDetails.password)
        await click(this.signInbtn);

    }

    async invalidLogin (username, password) {

        await textInput(this.inputEmail, invalidUserDetails.username)
        await textInput(this.inputPassword, invalidUserDetails.password)
        await click(this.signInbtn);

    }



}

module.exports = new signInPage();