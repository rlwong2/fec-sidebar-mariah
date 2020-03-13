var request = require('request');
var faker = require('faker');
var axios = require('axios');
//var bodyParser = require('body-parser');
var db = require('./db/index.js');

module.exports.generateFakeSongs = function(username, callback) {
  // generate random song names


  // generate random numbers to help randomize artist name
  // generate random artist name
  axios.get(`http://names.drycodes.com/1?nameOptions=funnyWords`)
    .then(function (response) {
      console.log('**====**')
      console.log(response.data);
      console.log('***************')
      var num = Math.ceil(Math.random() * 2)
      var fakeArtistName = response.data[0]
      var temp = fakeArtistName.split('_')
      if (num = 1) {
        fakeArtistnName = temp[0]
      } else {
        fakeArtistName = temp.join(' ')
      }})
    .catch(function (err) {
      console.log('error getting fake artist name ')
    })
    return axios.get(`http://names.drycodes.com/1?separator=space`)
    .then(function (response) {
      var fakeSongName = response.data[0]
      console.log('line 30 ' + fakeSongName)
      console.log('' + username + fakeArtistName + fakeSongName + fakeAlbumArt)
      // run the rest of the random info generator
      generateRandomLikeData(username, fakeArtistName, fakeSongName, fakeAlbumArt, callback);
    })

    .catch(function (error) {
      console.log('There was an error retrieving your fake song name ')
    })


    // .catch(function (error) {
    //   console.log('There was an error retrieving your fake song name ')
    // })

  // for every  1 like a song usually has 50 - 80 listens
  // for every 1 rt a song usually has 10 - 30 likes
  // comments  is really random
};

// Generate rrest of fake data
var generateRandomLikeData = function (username, fakeArtistName, fakeSongName, fakeAlbumArt, callback) {
  var fake = {};
  var fakeUser = username;
  var fakeSongName = fakeSongName;
  var fakeArtistName = fakeArtistName;
  var fakePlays = Math.ceil(Math.random() * 90000000);
  var fakeLikes = fakeLikes / (50 * (Math.ceil(Math.random * 1.5)));
  var fakeReposts = fakeReposts / (10 * (Math.ceil(Math.random * 3)));
  var fakeComments = fakeReposts / ((Math.random() * 5) + .5)
  var fakeAlbumArt = fakeAlbumArt;

  // Add fake data to fakeInfo object
  fake.user = fakeUser;
  fake.song_name = fakeSongName;
  fake.artist_name = fakeArtistName;
  fake.plays = fakePlays;
  fake.likes = fakeLikes;
  fake.reposts = fakeReposts;
  fake.comments = fakeComments;
  fake.album_art = "https://fec-sidebar-album-art.s3.amazonaws.com/abba/61fCRGMOASL._SY355_.jpg"

  console.log('line 66 ' + JSON.stringify(fake));
  // make db call to create
  db.UserLikes.create(fake)
    .then(function(song) {
      console.log(JSON.stringify(song))
      callback()
    })
    .catch(function(err) {
      console.log('there was an error trying to add a new song to userlike\'s table');
    })
};

  // Randomize get statement
  // Create fake info object
  // get about



