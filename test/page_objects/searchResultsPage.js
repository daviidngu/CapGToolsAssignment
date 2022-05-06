const { openBrowser } = require('../Utilities');

const click = require('../Utilities').click
class searchResultsPage{


    get firstResult(){
        return $('[data-testid=product-link]');



    };



    async navToFirstProd(){
        //Try block to catch Target frame error
        try{
        await click(this.firstResult);
        }
        catch{}
    };
};




module.exports = new searchResultsPage()