
const click = require('../Utilities').click

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
        return $('//*[@id="tabpanel-0"]/div/div/ul/li[1]/div/div[4]/button')
    }             
    async deleteOne(){
        await click(this.deleteBtn)
    }
    async clearBag(){
        await this.removeOutOfStock()
        
        while(true){
            try{
            await this.deleteOne();
            }
           catch(err){
               break
           }
        }
    }


}

module.exports = new bagPage();