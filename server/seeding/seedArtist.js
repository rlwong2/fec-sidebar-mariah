var faker = require('faker');
var fakeData = require('./fakeData.js');
var db = require('../db/index.js')

module.exports.createArtist = function(j, callback) {

  fakeArtist = fakeData.fakeNames[j];
  fakeAbout = '';
  // About stuff
  var words = fakeData.fakeAbouts;

  // How many sentences
  var random = Math.ceil(Math.random() * 6);

  // What sentences
  var index = Math.floor(Math.random() * (words.length - 7));

  while (random > 0) {
    fakeAbout += words[index] + '. ';
    index ++;
    random --;
  }


  // Generate random amount of social links
  var numLinks = Math.ceil(Math.random() * 4);
  console.log(numLinks);
  var linkArr = [];
  while (numLinks > 0) {
    var newLink = faker.internet.url();
    console.log(newLink + ' ----' + Array.isArray(newLink))
    linkArr.push(newLink)
    numLinks--;
  }

  // Join array of fake links into one string separated by a space.
  var fakeLinks = linkArr.join(' ');

  /////// Generate rest of fake data ///////////
  var trackCount = Math.ceil(Math.random() * 200);
  var followerCount = Math.floor(Math.random() * 20000);
  var followingCount = Math.floor(Math.random() * 1000);

  // Add the rando, generated info into the database.
  db.Artist.create({
    name: fakeArtist,
    track_count: trackCount,
    follower_count: followerCount,
    following_count: followingCount,
    about: fakeAbout,
    links: fakeLinks
  })
    .then(function (artist) {
      console.log('Success seeding artist data');
      callback(fakeArtist);

    })
    .catch(function (err) {
      console.log('An error occurred trying to add new artist to the database');
    })


    .catch((err) => {
      console.log('There was an error with getting random data from drycodes');
      console.log('error: ' + err.body);
    });

}