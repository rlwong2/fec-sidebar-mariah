var faker = require('faker');
var Sequelize = require('sequelize');
var Promise = require('bluebird');

var db = require('../db/index.js');


var seedSong = require('./seedSong.js');
var seedArtist = require('./seedArtist.js')

//Promisify counter
var results = [];

// Create 100 artists
for (var j = 0; j < 5; j ++) {
  console.log('J value ###: ' + j)
  // create a fake artist first
  var username = seedArtist.createArtist(j)
  //var artistname = result;

  console.log('username :' + username)

  // Randomly generate how many songs user will have liked
  var randomSongCount = Math.ceil(Math.random() * 50);
  console.log('Random Song Count ###: '  + randomSongCount)

  //Promisify song names
  var promises = [];

  // generate songs
  for (var k = 0; k < randomSongCount; k ++ ) {
    var songName = seedSong.generateSong(username);
    promises.push(songName)
    console.log('Song just created: ' + songName + ' //// ' + username);
    console.log('index: ' + k);
  }

  Promise.all(promises)
    .then((results) => {
      // Push results to keep outer for loop in check.
      results.push(result)
    })
    .catch(() => {
      console.log('An error has occured trying to generate songs + 44 seed.js')
    })


    // (j, function(fakeArtist) {
      console.log('line 30: should be after song names: ' + username)

  };
  // module.exports = function() {
  //   console.log('saf')
  //   var usernames = [];
  //   for (var i = 0; i < 10; i ++) {
  //     usernames.push(seedArtists.createFakeArtist())
  //   }

  //   console.log(usernames)
  // }

Promise.all(results)
  .then(console.log('Done! '))
