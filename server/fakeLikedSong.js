var faker = require('faker');
var axios = require('axios');
var Sequelize = require('sequelize');
var db = require('./db/index.js');

var fakeArt = require('./fakeAlbumProfileArt.js');



// Generate rrest of fake data
var makeLikedSong = function (username, fakeArtistName, fakeSongName, fakeLocation, fakeAlbum, fakePic) {

  /////// GENERATE RANDOM NUMBERSSS
  var fakePlays = Math.ceil(Math.random() * 90000000);
  var fakeLikes = Math.ceil(fakePlays / (50 * (Math.random() * 1.5)));
  var fakeReposts = Math.ceil(fakeLikes / (20 * (Math.random() * 3)));
  var fakeComments = Math.ceil(fakeReposts / ((Math.random() * 5 + .5)));

  // Create new liked song in database
  db.SongLike.create({
    user: username,
    song_name: fakeSongName,
    artist_name: fakeArtistName,
    plays: fakePlays,
    likes: fakeLikes,
    reposts: fakeReposts,
    comments: fakeComments,
    album_art: fakeAlbum,
    location: fakeLocation,
    artist_pic: fakePic
  })
    .then(function (song) {
      console.log('New song like has been added! ');
    })
    .catch(function (err) {
      console.log('there was an error trying to add a new song to likedsongs  table');
    })
};



module.exports.generateFakeSongs = function(username) {

  var fakeArtistName;

  // get random artist name from database
  db.Artist.findOne({ order: Sequelize.literal('rand()') })
    .then((response) => {

      fakeArtistName = response.dataValues.name;

      // Run API get req to get song name
      return axios.get('http://names.drycodes.com/1?separator=space');
    })
    .then((response2) => {

      //////// Generate random Location
      var city = faker.address.city();
      var country = faker.address.country();
      var fakeLocation = city + ', ' + country;

      //////// Generate profile picture
      // generate random index number to choose random profile art link
      var max = fakeArt.profile.length;
      var num = Math.floor(Math.random() * 16);
      var fakePic = fakeArt.profile[num];
      var fakeAlbum = fakeArt.album[num]

      // Run the function that makes the song
      return makeLikedSong(username, fakeArtistName, response2.data[0], fakeLocation, fakeAlbum, fakePic);
    })
    .catch(function (err) {
      console.log('there was an error trying to add a new song to likedsongs table');
    })



};