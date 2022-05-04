const userDetails = require("./testConfigs");
const homePage = require("./page_objects/homePage");
const signInPage = require("./page_objects/signInPage");
const myAccountPage = require("./page_objects/myAccountPage");
const searchResultsPage = require("./page_objects/searchResultsPage");
const productPage = require("./page_objects/productPage");
const bagPage = require("./page_objects/bagPage");
const closeBrowser = require('./utilities').closeBrowser
const fetch = require('node-fetch');
const csv = require("csvtojson")
const assert = require('chai').assert
const expectChai = require('chai').expect
const baseUrl = require("./testConfigs").baseUrl



describe('Log into Kmart fail', () => {
    
    it('should not login - invalid login', async () => {
        await homePage.openHomePage();
        await homePage.navToSignIn();
        await signInPage.invalidLogin();

        //Bad user details - failed login request
        await expect(signInPage.invalidLoginMessage).toBeDisplayed()

        
    });
});

describe('Log into Kmart kmart and order books', () => {   

    it('should login with valid credentials', async () => {
        await homePage.openHomePage();
        await homePage.navToSignIn();
        await signInPage.login();

        //Successful login should take you to the accounts page
        await expect(browser).toHaveUrlContaining(baseUrl+"account/")
        
    });
    

    it('should order Harry Potter and the Philosopher\'s Stone', async () => {
        
        await homePage.openHomePage();
        await homePage.searchBook();
        await searchResultsPage.navToFirstProd();
        await productPage.addToCart();
        
        
        
    });

    
    it('order books from a JSON file', async () => {
        
        await homePage.openHomePage();
        const books = require("./More_books/exampleBooks.json");
        for(let i = 0; i < books.length; i++){
            await homePage.searchBook(books[i]);
            await searchResultsPage.navToFirstProd();
            await productPage.addToCart();
            await homePage.openHomePage();
        };
    });
        


    it('order books from a CSV file', async () => {
        
        await homePage.openHomePage();
        const books = await csv().fromFile("./test/More_books/booksCSV.csv")
        for(let i = 0; i < books.length; i++){
            await homePage.searchBook(books[i]["Book Title"]);
            await searchResultsPage.navToFirstProd();
            await productPage.addToCart();
            await homePage.openHomePage();
        }
    });
    
    

});

describe('Clear bag', () => {

    it('should clear bag', async () => {
        
        await homePage.openHomePage();
        await homePage.navToBag();
        await bagPage.clearBag();
        await homePage.openHomePage();
          
        
    });
    

});

describe('Close Window', () => {

    it('should close the window', async () => {
        
        await closeBrowser();
        
          
        
    });
    

});


describe('API GET request', () => {
    const APIBaseURL = "https://reqres.in/api/users"

    it('successful GET request with query param', async () => {
        const pageNum = 2
        const queryParam = "?page="+String(pageNum)
        const response = await fetch(APIBaseURL+queryParam);
        expectChai(response.status).to.equal(200);
    });

    it('successful GET request with path var', async () => {
        const userNum = 2
        const pathVar = "/"+String(userNum)
        const response = await fetch(APIBaseURL+pathVar);
        expectChai(response.status).to.equal(200);
    });

    it('fail GET request with path var', async () => {
        const userNum = 100000
        const pathVar = "/"+String(userNum)
        const response = await fetch(APIBaseURL+pathVar);
        expectChai(response.status).to.equal(404);
    });



    
});


describe('API POST request', () => {
    const APIPostURL = "https://reqres.in/api/register"
    
    it('Successful POST request', async () => {
        const data= {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
        const response = await fetch(APIPostURL,{
                                    method: "POST",
                                    headers: {'Content-Type': 'application/json'},
                                    body: JSON.stringify(data)});

        expectChai(response.status).to.equal(200);
    });


    it('Unsuccessful POST request', async () => {
        const data= {
            "email": "eve.holt@reqres.in",
        }
        const response = await fetch(APIPostURL,{
                                    method: "POST",
                                    headers: {'Content-Type': 'application/json'},
                                    body: JSON.stringify(data)});

        expectChai(response.status).to.equal(400);
    });

    
});


