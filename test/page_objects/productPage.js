
const click = require('../Utilities').click

class productPage{

    get bagBtn(){
        return $('span=Add to bag');
    }

    async addToCart(){
        await click(this.bagBtn);


    }


}


module.exports = new productPage();