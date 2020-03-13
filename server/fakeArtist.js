//var request = require('request');
var faker = require('faker');
var axios = require('axios');
//var bodyParser = require('body-parser');
var db = require('./db/index.js');
// import fakesongdata
//var generateFakeSongs = require('./fakeLikedSong.js');


module.exports.createFakeArtist = function(callback) {

  var fakeArtistName;

  // generate random artist name
  axios.get(`http://names.drycodes.com/1?nameOptions=funnyWords`)
    .then((response) => {
      var name = response.data;
      var num = Math.ceil(Math.random() * 2);
      var temp = name[0].split('_');
      if (num === 1) {
        fakeArtistName = temp[0];
      } else {
        fakeArtistName = temp.join(' ');
      }

      // generate random 'about' ///////////
      ////////  Randomize the get statement
      var sentences = Math.floor(Math.random() * 2);
      var num = Math.ceil(Math.random() * 3);
      if (sentences === 0) {
        var parameter = 'sentences';
      } else {
        var parameter = 'paras';
      }

      // Send a get request for random hipster letters or paragraphs
      return axios.get(`https://hipsum.co/api/?type=hipster-centric&${parameter}=${num}`);
    })
    .then(function (response2) {

      /////// USe response data as fake about
      var fakeInfo = response2.data[0];

      // Generate random amount of social links
      var numLinks = Math.ceil(Math.random() * 4);
      console.log(numLinks);
      var linkArr = [];
      while (numLinks > 0) {
        var newLink = faker.internet.url();
        console.log(newLink + ' ----' + Array.isArray(newLink))
        linkArr.push(newLink)
        numLinks --;
      }

      var fakeLinks = linkArr.join(' ');
      console.log('$KJFAL' + fakeLinks + Array.isArray(fakeLinks));
      /////// Generate rest of fake data ///////////
      var trackCount = Math.ceil(Math.random() * 200);
      var followerCount = Math.floor(Math.random() * 20000);
      var followingCount = Math.floor(Math.random() * 1000);

      // Add the rando, generated info into the database.
      return db.Artist.create({
        name: fakeArtistName,
        track_count: trackCount,
        follower_count: followerCount,
        following_count: followingCount,
        about: fakeInfo,
        links: fakeLinks
      });
    })
    .then(function (artist) {
      callback(artist.name);
    })
    .catch(function (err) {
      console.log('An error occurred trying to add new artist to the database');
    })


    .catch((err) => {
      console.log('There was an error with getting random data from drycodes');
      console.log('error: ' + err.body);
    });

};