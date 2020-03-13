var song = require('./fakeLikedSong.js');
var artist = require('./fakeArtist.js');


// create a fake artist first
var username = artist.createFakeArtist(function(username) {
  console.log('line 7: ' + username);
  //fakeSong.generateFakeSongs(username);
});
