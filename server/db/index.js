var Sequelize = require('sequelize');

// Will put db name here at some point
var dbName = '';
var username = 'root';
var password = '';

// Databse login info
var db = new Sequelize(dbName, username, password, {
  dialect: "mysql",
  port: 3000
});

// Connect to database
db
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established')
  }, function (err) {
    console.log('Unable to connect to the database: ', err)
  });

// Defining a model. Id, createdAt and updateAt auto added.
var Artist = db.define('Artist', {
  name: Sequelize.STRING,
  track_count: Sequelize.INTEGER,
  follower_count: Sequelize.INTEGER,
  following_count: Sequelize.INTEGER,
  about: Sequelize.STRING,
  links: Sequelize.STRING
})