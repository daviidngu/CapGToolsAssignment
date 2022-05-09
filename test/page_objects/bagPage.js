
const click = require('../Utilities').click
const searchTerm = require("../testConfigs").searchTerm

class bagPage{

    get removeOutOfStockBtn(){
        return $('span=Remove items')
    }
    async removeOutOfStock(){
        try{
            await click(this.removeOutOfStockBtn)
        }
        catch{}
            
    }


    get deleteBtn(){
        return $('[data-testid=deleteButton]')
    }             
    async deleteOne(){
        await click(this.deleteBtn)
    }

    get getBagSize(){
        return $('[data-testid=bagItems]').$$('li').length
    }

    async clearBag(){
        
        const bagSize = await this.getBagSize

        for(let i = 0; i < bagSize; i++){
            await this.deleteOne();
        };
        
    }

    async getItem(item = searchTerm){
        var selector = 'span*='+item;
        return $(selector);
    }

    

    get emptyBagMsg(){
        return $('[data-testid=empty-msg]')
    }
    

}

module.exports = new bagPage();