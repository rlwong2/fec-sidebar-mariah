// Making this cuz I suck at using promises

var Promise = require('bluebird');
var axios = require('axios');

var fakeArtistName;
var fakeSongName;


axios.get(`http://names.drycodes.com/1?nameOptions=funnyWords`)
  .then((response) => {
    var name = response.data
    var num = Math.ceil(Math.random() * 2)
    console.log(response.data)
    var temp = name[0].split('_')
    console.log('temp: ' + temp)
    console.log('num: ' + num)
    if (num === 1) {
      fakeArtistName = temp[0]
    } else {
      fakeArtistName = temp.join(' ')
    }

    return axios.get(`http://names.drycodes.com/1?separator=space`)
  })
  .then((response2) => {
    fakeSongName = response2.data[0]
    console.log('line 25 ' + fakeSongName)
  })
  .then(() => {

    console.log('1/artistname: ' + fakeArtistName)
    console.log('2/songname: ' + fakeSongName)

  })