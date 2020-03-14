var faker = require('faker');
var axios = require('axios');
var Sequelize = require('sequelize')
var db = require('./db/index.js');
var fakeSongs = require('./fakeLikedSong.js')



fakeSongs.generateFakeSongs('helo')


// db.Artist.findOne({ order: Sequelize.literal('rand()')})
// .then(function (artist) {
//   console.log(artist.dataValues.name)



// })