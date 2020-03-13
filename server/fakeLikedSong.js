var faker = require('faker');
var axios = require('axios');

var db = require('./db/index.js');



// Generate rrest of fake data
var generateRandomLikeData = function (username, fakeArtistName, fakeSongName) {
  console.log('All variables: ' + username, fakeArtistName, fakeSongName)

  // Generate random numbers
  var fakePlays = Math.ceil(Math.random() * 90000000);;
  var fakeLikes = Math.ceil(fakePlays / (50 * (Math.random() * 1.5)));
  var fakeReposts = Math.ceil(fakeLikes / (20 * (Math.random() * 3)));
  var fakeComments = Math.ceil(fakeReposts / ((Math.random() * 5 + .5)));

  // make db call to create data row in likedsongs table
  db.UserLikes.create({
    user: username,
    song_name: fakeSongName,
    artist_name: fakeArtistName,
    plays: fakePlays,
    likes: fakeLikes,
    reposts: fakeReposts,
    comments: fakeComments,
    album_art: 'https://fec-sidebar-album-art.s3.amazonaws.com/abba/61fCRGMOASL._SY355_.jpg'
  })
    .then(function (song) {
      console.log(JSON.stringify(song))
      console.log('New song like has been added! ');
    })
    .catch(function (err) {
      console.log('there was an error trying to add a new song to userlike\'s table');
    })
};



module.exports.generateFakeSongs = function(username) {

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
      // Run API get req to get song name
      return axios.get(`http://names.drycodes.com/1?separator=space`);
    })
    .then((response2) => {
      return generateRandomLikeData(username, fakeArtistName, response2.data[0]);
    })
    .catch((err) => {
      console.log('There was an error with getting random data from drycodes');
      console.log('error: ' + err.body);
    });
};