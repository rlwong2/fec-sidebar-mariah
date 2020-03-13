var request = require('request');
var faker = require('faker');
//var bodyParser = require('body-parser');
var db = require('./db/index.js');


const createFakeArtist = function() {


  // Create random data object and values
  var fakeInfo = {about: ''};

  // Random name type generator
  var nameType = Math.floor(Math.random() * 5);
  if (nameType === 0) {
    var randomName = faker.finance.accountName();
  }
  if (nameType === 1 || nameType === 2) {
    var randomName = faker.internet.userName();
  } else {
    var randomName = faker.name.findName();
  }

  // Generate rrest of fake data
  var fakeLinks = faker.internet.url();
  var trackCount = Math.ceil(Math.random() * 200);
  var followerCount = Math.floor(Math.random() * 20000);
  var followingCount = Math.floor(Math.random() * 1000);

  // Add fake data to fakeInfo object
  fakeInfo.name = randomName;
  fakeInfo.track_count = trackCount;
  fakeInfo.follower_count = followerCount;
  fakeInfo.following_count = followingCount;
  fakeInfo.links = fakeLinks;

  // == Randomize the get statement
  var sentences = Math.floor(Math.random() * 2);
  var num = Math.ceil(Math.random() * 3);
  if (sentences === 0) {
    var parameter = 'sentences';
  } else {
    var parameter = 'paras';
  }

  // Create fake about object
  request
    .get(`https://hipsum.co/api/?type=hipster-centric&${parameter}=${num}`, function(err, response, body) {
      if (err) {
        console.log('An error has occurred trying to retrieve hipster data');

      } else {
      // body will be an array, turn to string
        fakeInfo.about = body;
        // add this data to tables
        db.create(fakeInfo)
          .then(function (artist) {
            console.log('New artist entry has been added to database');
            //console.log(artist);

            // we run the fakesongLikes function

          })
          .catch(function (err) {
            console.log('An error occurred trying to add new artist to the database');
          //console.log(err);
          });

};

module.exports = createFakeArtist()