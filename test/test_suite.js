const user_details = require("./test_configs");
const home_page = require("./page_objects/home_page");
const signIn_page = require("./page_objects/signIn_page");
const fetch = require('node-fetch');
const assert = require('chai').assert
const expect = require('chai').expect
//import fetch from "node-fetch";

//Login to Amazon
/*
describe('Log in to Amazon', () => {
    it('should login with valid credentials', async () => {
        await home_page.open_home_page();
        await home_page.nav_to_login();
        await signIn_page.login();

        await browser.pause(10000);
        
    });
});

*/

describe('API GET request', () => {
    const API_Base_URL = "https://reqres.in/api/users"
    
    it('successful GET request with query param', async () => {
        const page_num = 2
        const query_param = "?page="+String(page_num)
        const response = await fetch(API_Base_URL+query_param);
        expect(response.status).to.equal(200);
    });

    it('successful GET request with path var', async () => {
        const user_num = 2
        const path_var = "/"+String(user_num)
        const response = await fetch(API_Base_URL+path_var);
        expect(response.status).to.equal(200);
    });

    it('fail GET request with path var', async () => {
        const user_num = 100000
        const path_var = "/"+String(user_num)
        const response = await fetch(API_Base_URL+path_var);
        expect(response.status).to.equal(404);
    });



    
});