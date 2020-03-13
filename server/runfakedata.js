var fakeData = require('./fakedata.js');
var fakeSong = require('./fakesongdata.js');


// create a fake artist first
var username = fakeData.createFakeArtist(function(username) {
  console.log('line 7: ' + username);
  fakeSong.generateFakeSongs(username);
});
