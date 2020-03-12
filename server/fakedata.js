// import request
var request = require('request');
// imort faker
//var faker = require('faker');


// create get req to get data ============

// == Randomize the get statement
var sentences = Math.floor(Math.random() * 2);
var num = Math.ceil(Math.random() * 3);
if (sentences === 0) {
  var parameter = 'sentences';
} else {
  var parameter = 'paras';
}
// set fake info object
var fakeInfo = {about: ''};

// get about
request
  .get(`https://hipsum.co/api/?type=hipster-centric&${parameter}=${num}`, function(err, response, body) {
    if (err) {
      console.log('An error has occurred trying to retrieve hipster data');
    }
    else {
      // body will be an array
      console.log(body);
    }
  });

// get links


// add this data to tables