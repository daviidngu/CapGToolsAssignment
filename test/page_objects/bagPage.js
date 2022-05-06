
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


    async clearBag(){
        
        while(true){
            try{
            await this.deleteOne();
            }
           catch(err){
               break
           }
        }
        
    }

    async getItem(item = searchTerm){
        var selector = 'span*='+item;
        return $(selector);
    }

    

    get emptyBagMsg(){
        return $('h1=No items currently in your bag. Let’s get shopping!')
    }
    

}

module.exports = new bagPage();