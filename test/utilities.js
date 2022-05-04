


module.exports.click = async function(btn){
    await browser.pause(2000);
    await btn.click();
    await browser.pause(2000);
}

module.exports.openBrowser = async function(input_url){
    await browser.url(input_url);
}

module.exports.closeBrowser = async function(){
    await browser.closeWindow();
}

module.exports.textInput = async function(textField, inputText){
    textField.setValue(inputText);
}