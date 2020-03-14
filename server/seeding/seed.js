var faker = require('faker');
var axios = require('axios');
var Sequelize = require('sequelize');

var db = require('../db/index.js');


var seedSongs = require('./seedSongs.js');
var seedArtists = require('./seedArtists.js')




// Randomly generate how many songs user will have liked
var randomSongCount = function() {
  var num = Math.ceil(Math.random() * 50);
  return num;
};



// create a fake artist first
var username = seedArtists.createFakeArtist(function(username) {
  // add a callback if desired
});

// Create 100 artists

module.exports = function() {
  console.log('saf')
  var usernames = [];
  for (var i = 0; i < 10; i ++) {
    usernames.push(seedArtists.createFakeArtist())
  }

  console.log(usernames)
}
// create fake likedsongs n times
// var nSongs = function() {
//   while
// };
