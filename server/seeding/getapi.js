var axios = require('axios');
var fakeData = require('./fakeData.js');
var fakeNames = [];
var fakeAbouts = [];
var fakeSongs = [];

module.exports = function() {
  fakeData.fakeNames = ['hey', 'you'];

}
// // Get 100 artist names
// axios.get(`http://names.drycodes.com/100?nameOptions=funnyWords`)
//   .then((response) => {
//     var nameArr = response.data;

//     // iterate through name array
//     for (var i = 0; i < nameArr.length; i++) {
//       var currentName = nameArr[i];
//       var temp = currentName.split('_');
//       var num = Math.floor(Math.random() * 3);
//       if (num === 0) {
//         fakeNames.push(temp[0]);
//       } else {
//         fakeNames.push(temp.join(' '));
//       };
//     }
//     console.log(fakeNames);
//     // Send a get request for random hipster letters or paragraphs
//     return axios.get('https://hipsum.co/api/?type=hipster-centric&sentences=500');
//   })
//   .then(function (hipster) {

//     // iterate through sentences
//     var words = hipster.data[0];

//     var sentenceArr = words.split('. ');

//     for (var x = 10; x > 0; x --) {
//       var about = '';
//       var random = Math.ceil(Math.random() * 6);
//       var index = Math.floor(Math.random() * (sentenceArr.length - 7));
//       while (random > 0) {
//         about += sentenceArr[index] + '. ';
//         index ++;
//         random --;
//       }
//       fakeAbouts.push(about);
//     }

//     console.log(fakeAbouts);

//     // Send a get request to get song names
//     return axios.get('http://names.drycodes.com/100?separator=space');
//   })
//   .then(function(songNames) {
//     fakeSongs = songNames.data;
//     console.log(fakeSongs);
//   })

//   .catch(function(err) {
//     console.log('error fetching API data.');
//   });



//     // /////// USe response data as fake about
//     // var fakeInfo = response2.data[0];

//     // // Generate random amount of social links
//     // var numLinks = Math.ceil(Math.random() * 4);
//     // console.log(numLinks);
//     // var linkArr = [];
//     // while (numLinks > 0) {
//     //   var newLink = faker.internet.url();
//     //   console.log(newLink + ' ----' + Array.isArray(newLink))
//     //   linkArr.push(newLink)
//     //   numLinks--;
//     // }
//     // // Join array of fake links into one string separated by a space.
//     // var fakeLinks = linkArr.join(' ');

//     // /////// Generate rest of fake data ///////////
//     // var trackCount = Math.ceil(Math.random() * 200);
//     // var followerCount = Math.floor(Math.random() * 20000);
//     // var followingCount = Math.floor(Math.random() * 1000);
