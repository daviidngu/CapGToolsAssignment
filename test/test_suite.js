const user_details = require("./test_configs");
const home_page = require("./page_objects/home_page");
const signIn_page = require("./page_objects/signIn_page");
const myAccount_page = require("./page_objects/myAccount_page");
const searchResults_page = require("./page_objects/searchResults_page");
const product_page = require("./page_objects/product_page");
const fetch = require('node-fetch');
const assert = require('chai').assert
const expectChai = require('chai').expect
const base_url = require("./test_configs").base_url
//import fetch from "node-fetch";

//Login to Kmart

describe('Log in to Kmart', () => {
    
    it('should not login - invalid login', async () => {
        await home_page.open_home_page();
        await home_page.nav_to_signIn();
        await signIn_page.invalid_login();
        await expect(signIn_page.invalid_login_message).toBeDisplayed()

        
    });
    

    it('should login with valid credentials', async () => {
        await home_page.open_home_page();
        await home_page.nav_to_signIn();
        await signIn_page.login();
        await expect(browser).toHaveUrl(base_url+"account/")
        
    });
    

    it('order Harry Potter and the Philosopher\'s Stone', async () => {
        
        await home_page.open_home_page();
        await home_page.searchBook();
        await searchResults_page.navToFirstProd();
        await product_page.addToCart();
        
        
        
    });


});




describe('API GET request', () => {
    const API_Base_URL = "https://reqres.in/api/users"

    it('successful GET request with query param', async () => {
        const page_num = 2
        const query_param = "?page="+String(page_num)
        const response = await fetch(API_Base_URL+query_param);
        expectChai(response.status).to.equal(200);
    });

    it('successful GET request with path var', async () => {
        const user_num = 2
        const path_var = "/"+String(user_num)
        const response = await fetch(API_Base_URL+path_var);
        expectChai(response.status).to.equal(200);
    });

    it('fail GET request with path var', async () => {
        const user_num = 100000
        const path_var = "/"+String(user_num)
        const response = await fetch(API_Base_URL+path_var);
        expectChai(response.status).to.equal(404);
    });



    
});


describe('API POST request', () => {
    const API_Post_url = "https://reqres.in/api/register"
    
    it('Successful POST request', async () => {
        const data= {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
        const response = await fetch(API_Post_url,{
                                    method: "POST",
                                    headers: {'Content-Type': 'application/json'},
                                    body: JSON.stringify(data)});

        expectChai(response.status).to.equal(200);
    });


    it('Unsuccessful POST request', async () => {
        const data= {
            "email": "eve.holt@reqres.in",
        }
        const response = await fetch(API_Post_url,{
                                    method: "POST",
                                    headers: {'Content-Type': 'application/json'},
                                    body: JSON.stringify(data)});

        expectChai(response.status).to.equal(400);
    });

    
});


