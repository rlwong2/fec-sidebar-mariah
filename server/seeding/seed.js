var faker = require('faker');
var Sequelize = require('sequelize');

var db = require('../db/index.js');


var seedSong = require('./seedSong.js');
var seedArtist = require('./seedArtist.js')



// Create 100 artists
for (var j = 0; j < 100; j ++) {

  // create a fake artist first
  var username = seedArtist.createArtist(j, function(fakeArtist) {
    console.log('username :' + username)

    // Randomly generate how many songs user will have liked
    var randomSongCount = Math.ceil(Math.random() * 50);

    // generate songs
    for (var k = 0; k < randomSongCount; k ++ ) {
      var songName = seedSongs.generateSong(username);
      console.log('Song just created: ' + song.song_name + ' //// ' + song.user);
      console.log('index: ' + k);
    }

  });
  console.log('line 30: should be after song names: ' + username)
  // module.exports = function() {
  //   console.log('saf')
  //   var usernames = [];
  //   for (var i = 0; i < 10; i ++) {
  //     usernames.push(seedArtists.createFakeArtist())
  //   }

  //   console.log(usernames)
  // }

}