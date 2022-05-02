
/*
const get_response = fetch("https://reqres.in/api/users?page=2")

get_response.json()

console.log(get_response)*/
const fetch = require('node-fetch');
const assert = require('chai').assert
const expect = require('chai').expect
const csv = require("csvtojson")
async function makeRequest() {
  const books = await csv().fromFile("./test/More_books/booksCSV.csv")
  console.log(books[1]["Book Title"])
  
}
makeRequest();
