
/*
const get_response = fetch("https://reqres.in/api/users?page=2")

get_response.json()

console.log(get_response)*/
const fetch = require('node-fetch');
const assert = require('chai').assert
const expect = require('chai').expect
const csv = require("csvtojson")
async function makeRequest() {
  var books = require("./test/More_books/exampleBooks.json")
  for(var i=0; i<books.length;i++){
    console.log(books[i])

  }
  
  
}
makeRequest();
