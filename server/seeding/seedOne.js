
var faker = require('faker');
var Sequelize = require('sequelize');
var Promise = require('bluebird');

var db = require('../db/index.js');


var seedSong = require('./seedSong.js');
var seedArtist = require('./seedArtist.js')

seedArtist.createArtist(0)