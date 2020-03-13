var request = require('request');
var faker = require('faker');
//var bodyParser = require('body-parser');
var db = require('./db/index.js');

const generateAPIinfo = function(username, callback) {
  // generate random song names


  // generate random numbers to help randomize artist name
  // generate random artist name
  axios.get(`http://names.drycodes.com/1?nameOptions=funnyWords`)
    .then(function (response) {
      var num = Math.ceil(Math.random() * 2)
      var fakeArtistName = response[0]
      var temp = fakeArtistName.split('_')
      if (num = 1) {
        fakeArtistnName = temp[0]
      } else {
        fakeArtistName = temp.join(' ')
      }

    axios.get(`http://names.drycodes.com/1?separator=space`)
    .then(function (response) {
      var fakeSongName = response[0]

      // run the rest of the random info generator
      generateRandomLikeData(fakeArtistName, fakeSongName, fakeAlbumArt, callback);
    })
    .catch(function (error) {
      console.log('There was an error retrieving your fake song name ')
    })

    })
    .catch(function (error) {
      console.log('There was an error retrieving your fake song name ')
    })

  // for every  1 like a song usually has 50 - 80 listens
  // for every 1 rt a song usually has 10 - 30 likes
  // comments  is really random
};

// Generate rrest of fake data
var generateRandomLikeData = function (fakeArtistName, fakeSongName, fakeAlbumArt, callback) {
  var fake = {};
  var fakeUser = username;
  var fakeSongName = fakeSongName;
  var fakeArtistName = fakeArtistName;
  var fakePlays = Math.ceil(Math.random() * 90000000);
  var fakeLikes = fakeLikes / (50 * (Math.ceil(Math.random * 1.5)));
  var fakeReposts = fakeReposts / (10 * (Math.ceil(Math.random * 3)));
  var fakeComments = fakeReposts / (Math.random() * 5) + .5
  var fakeAlbumArt = fakeAlbumArt;

  // Add fake data to fakeInfo object
  fake.user = fakeUser;
  fake.song_name = fakeSongName;
  fake.artist_name = fakeArtistName;
  fake.plays = fakePlays;
  fake.likes = fakeLikes;
  fake.reposts = fakeReposts;
  fake.comments = fakeComments;
  fake.album_art = fakeAlbumArt;

  // make db call to create
  db.UserLikes.create(fake)
    .then(function(song) {
      console.log(JSON.stringify(song))
      callback()
    })
    .catch(function(err) {
      console.log('there was an error trying to add a new song to userlike's table');
    })
};

  // Randomize get statement
  // Create fake info object
  // get about




const startGenerateRandomSongLikes = function(username) {

  var i = Math.floor(Math.random() * 20)

  // this might not be async
  while (i > 0) {
    generateAPIinfo(username, function(err, success) {
      if (err) {
        console.log('error')
      } else {
        return i --;

      }
    })
  }
}

module.exports = startGenerateRandomSongLikes;