var express = require('express');
var app = express();
var PORT = 3333;
// import artist model methods
var db = require('./db/index.js');


// Require Middleware
var bodyParser = require('body-parser');


// Middleware functionality goes here
app.use(bodyParser());


// GET/POST req here
app.get('/artist', function(req, res) {
  db.findOne({id: req.body.id})
    .then(function(artist) {
      // send back the artist info
      res.send(artist);
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
  db.create(req.body)
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



// listen for reqs
app.listen(PORT, () => {
  console.log(`Server listening in on port ${PORT}`);
});