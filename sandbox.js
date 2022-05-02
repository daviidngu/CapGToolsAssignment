
/*
const get_response = fetch("https://reqres.in/api/users?page=2")

get_response.json()

console.log(get_response)*/
const fetch = require('node-fetch');
const assert = require('chai').assert
const expect = require('chai').expect
/*async function makeRequest() {
  const page_num = 2
  const query_param = "?page="+String(page_num)
  const response = await fetch("https://reqres.in/api/users"+query_param);
  expect(response.status).to.equal(200);
  //console.log('response.status: ', response.status); //
  //const response_json =  await response.json()
  //console.log(response_json);
  console.log('response.status: ', response.status); //
}
makeRequest();*/
