
/*
const get_response = fetch("https://reqres.in/api/users?page=2")

get_response.json()

console.log(get_response)*/
const fetch = require('node-fetch');
const assert = require('chai').assert
const expect = require('chai').expect
async function makeRequest() {
  const API_Post_url = "https://reqres.in/api/register"
  const data = {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}
  const response = await fetch(API_Post_url, {method: "POST",
                                          headers: {'Content-Type': 'application/json'},
                                          body: JSON.stringify(data)});
  //expect(response.status).to.equal(200);
  console.log('response.status: ', response.status); //
  const response_json =  await response.json()
  console.log(response_json);
}
makeRequest();
