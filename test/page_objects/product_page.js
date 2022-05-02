


class product_page{

    get bagbutton(){
        return $('span=Add to bag');
    }

    async addToCart(){
        await this.bagbutton.click();

        await browser.pause(6000);
    }


}


module.exports = new product_page();