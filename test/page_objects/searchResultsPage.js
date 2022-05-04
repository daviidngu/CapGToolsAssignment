
const click = require('../Utilities').click
class searchResultsPage{


    get firstResult(){
        return $('//*[@id="__next"]/div/main/div[2]/div/ul/li[1]/div/div[1]');


    };



    async navToFirstProd(){
        await click(this.firstResult);
        

    };
};




module.exports = new searchResultsPage()