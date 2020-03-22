var faker = require('faker');
var Sequelize = require('sequelize');
var Promise = require('bluebird');

var db = require('../db/index.js');


var seedSong = require('./seedSong.js');
var seedArtist = require('./seedArtist.js')

//Promisify counter. Makes async functions go in order in for-loop.
var results = [];

// Create 100 artists
for (var j = 1; j < 5; j ++) {

  // create a fake artist first
  var username = seedArtist.createArtist(j)
  //var artistname = result;
//   db.Artist.findOne({
//     order: Sequelize.literal('rand()')
//   })
//     .then((artist) => {
//       // Randomly generate how many songs user will have liked
//       var randomSongCount = Math.ceil(Math.random() * 50);

//       //Promisify song names
//       var promises = [];

//       // generate songs
//       for (var k = 0; k < randomSongCount; k ++ ) {
//         var songName = seedSong.generateSong(username, artist.name);
//         promises.push(songName);
//       }

//       Promise.all(promises)
//         .then((results) => {
//           // Push results to keep outer for loop in check.
//           results.push(result)
//         })
//         .catch(() => {
//           console.log('An error has occured trying to generate songs + 44 seed.js');
//         });

//     })
//     .catch((err) => {
//       console.log('There was an error finding a random aritst.');
// });

}

Promise.all(results)
  .then(function() {
    for (var k = 99; k > 0; k++) {
      seedSong.findArtist()
  }
});



