const user_details = require("./test_configs");
const home_page = require("./page_objects/home_page");
const signIn_page = require("./page_objects/signIn_page");


//Login to Amazon
describe('Log in to Amazon', () => {
    it('should login with valid credentials', async () => {
        await home_page.open_home_page();
        await home_page.nav_to_login();
        await signIn_page.login();

        await browser.pause(10000);
        
    });
});


console.log(user_details)
