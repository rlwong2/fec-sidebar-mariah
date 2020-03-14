
// import db methods
var db = require('../db/index/js');

module.exports.createArtist = function(artistNames, songNames, about) {

  // create artists
  for (var i = 100; i > 0; i --) {
    artistNames[i];
    about[i];



    db.Artist.create({

    })
      .then(function(artist) {
        console.log('Artist has been added to the db')
      })
      .throw(function(artist) {
        console.log('Error adding artist to db. ')
      })
  }

};

module.exports.createLikedSongs = function(username) {

  // create liked songs
  for (var random; random > 0; random --) {
    songNames[i];

  }

}
