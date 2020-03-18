var express = require('express');
var app = express();

var path = require('path');
var PORT = 3333;
// import artist model methods
var db = require('./db/index.js');


// Require Middleware
var bodyParser = require('body-parser');


// Middleware functionality goes here
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser());

// GET/POST req here
app.get('/artist', function(req, res) {
  console.log('hey' + req.query.name);
  db.Artist.findOne({
    where: {
      'name': req.query.name
    }})
    .then(function(artist) {

      // res.send(artist);  //<== uncomment this if removing the artistLikes search.
      return db.SongLike.findAll({
        user: artist.name
      });
    })
    .then(function(likedsongs) {
      res.send(likedSongs);
    })

    .catch(function(err) {
      console.log('Could not find artist in database');
    });
});

// Adds new artist to the db, going to use to fill up db.
app.post('/artist', function(req, res) {
  // req.body should be an object with relevant values
  //
  console.log(JSON.stringify(req.body));
  db.Artist.create(req.body)
    .then(function(artist) {
      console.log('New artist entry has been added to database');
      res.send(artist);
      // Send a response that does something maybe.
    })
    .catch(function(err) {
      console.log('An error occurred trying to add new artist to the database');
      console.log(err);
    });

});

// Add Song info
app.post('/user/likes', function(req, res) {
  console.log(JSON.stringify(req.body));
  db.UserLikes.create(req.body)
    .then(function(userLikes) {

    })
    .catch(function(err) {
      console.log('An error has occured trying to add new song info');
      console.log(err);
    });
});


// listen for reqs
app.listen(PORT, () => {
  console.log(`Server listening in on port ${PORT}`);
});