

class searchResults_page{


    get firstResult(){
        return $('//body/div[1]/div/main/div[2]/div/ul/li[1]');

    };



    async navToFirstProd(){
       

        await this.firstResult.click();

    };
};




module.exports = new searchResults_page()