var request = require('request');
var faker = require('faker');
var axios = require('axios');

var db = require('./db/index.js');



// Generate rrest of fake data
var generateRandomLikeData = function (num, username, fakeArtistName, fakeSongName) {
  console.log('All variables: ' + username, fakeArtistName, fakeSongName)
  // var fakeUser = username;
  // var fakeSongName = fakeSongName;
  // var fakeArtistName = fakeArtistName;

  var fakePlays = num
  console.log('fakePlays: ' + fakePlays)
  var fakeLikes = num / (50 * (Math.ceil(Math.random * 1.5)));
  console.log('fakeLikes: ' + fakeLikes)
  var fakeReposts = num / (10 * (Math.ceil(Math.random * 3)));
  console.log('fakeReposts: ' + fakeReposts)
  var fakeComments = num / ((Math.random() * 5) + .5)


  var fake = {};
  // Add fake data to fakeInfo object
  fake.user = fakeUser;
  fake.song_name = fakeSongName;
  fake.artist_name = fakeArtistName;
  fake.plays = fakePlays;
  fake.likes = fakeLikes;
  fake.reposts = fakeReposts;
  fake.comments = fakeComments;
  fake.album_art = "https://fec-sidebar-album-art.s3.amazonaws.com/abba/61fCRGMOASL._SY355_.jpg";

  console.log('line 66 ' + JSON.stringify(fake));
  // make db call to create
  db.UserLikes.create(fake)
    .then(function (song) {
      console.log(JSON.stringify(song))
      console.log('New song like has been added! ')
    })
    .catch(function (err) {
      console.log('there was an error trying to add a new song to userlike\'s table');
    })
};



module.exports.generateFakeSongs = function(username) {
  // generate random song names

  console.log('username 51: '+ username)
  axios.get(`http://names.drycodes.com/1?nameOptions=funnyWords`)
    .then((response) => {
      var name = response.data;
      var num = Math.ceil(Math.random() * 2);
      console.log(response.data);
      var temp = name[0].split('_');
      console.log('temp: ' + temp);
      console.log('num: ' + num);
      if (num === 1) {
        fakeArtistName = temp[0];
      } else {
        fakeArtistName = temp.join(' ');
      }

      return axios.get(`http://names.drycodes.com/1?separator=space`);
    })
    .then((response2) => {
      fakeSongName = response2.data[0];
      console.log('line 25 ' + fakeSongName);
      console.log('1/artistname: ' + fakeArtistName);
      console.log('2/songname: ' + fakeSongName);
      // run
      var num = Math.ceil(Math.random() * 90000000);
      console.log(num + typeof num)
      return generateRandomLikeData(num, username, fakeArtistName, fakeSongName)

    // })
    // .then(() => {
    //   console.log('success!')
    })
    .catch((err) => {
      console.log('There was an error with getting random data from drycodes');
      console.log('error: ' + err.body)
    });







  // generate random numbers to help randomize artist name
  // generate random artist name
  // axios.get(`http://names.drycodes.com/1?nameOptions=funnyWords`)
  //   .then(function (response) {
  //     console.log('**====**')
  //     console.log(response.data);
  //     console.log('***************')
  //     var num = Math.ceil(Math.random() * 2)
  //     var fakeArtistName = response.data[0]
  //     var temp = fakeArtistName.split('_')
  //     if (num = 1) {
  //       fakeArtistnName = temp[0]
  //     } else {
  //       fakeArtistName = temp.join(' ')
  //     }})
  //   .catch(function (err) {
  //     console.log('error getting fake artist name ')
  //   })
  //   return axios.get(`http://names.drycodes.com/1?separator=space`)
  //   .then(function (response) {
  //     var fakeSongName = response.data[0]
  //     console.log('line 30 ' + fakeSongName)
  //     console.log('' + username + fakeArtistName + fakeSongName + fakeAlbumArt)
  //     // run the rest of the random info generator
  //     generateRandomLikeData(username, fakeArtistName, fakeSongName, fakeAlbumArt, callback);
  //   })

  //   .catch(function (error) {
  //     console.log('There was an error retrieving your fake song name ')
  //   })


    // .catch(function (error) {
    //   console.log('There was an error retrieving your fake song name ')
    // })

  // for every  1 like a song usually has 50 - 80 listens
  // for every 1 rt a song usually has 10 - 30 likes
  // comments  is really random
};


  // Randomize get statement
  // Create fake info object
  // get about



