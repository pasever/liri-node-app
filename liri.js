var twitter = require('twitter');
var spotify = require('node-spotify-api');
var request = require('request');
var keys = require("./keys.js");
var fs = require("fs");

// var input = {

  // textFile: function textFile() {
  var input = fs.readFile("random.txt", "utf8", function(error, data) {

      if (error) {
        return console.log(error);
      }
      var info = data;
      console.log(info);
      //var dataArr = data.split(",");
      //console.log(dataArr);

    });
    //console.log(input);
//   }
//
//
// }
//console.log( input.textFile);
//console.log(typeof keys.spotifyKeys);

//var spotify = new Spotify(keys.spotifyKeys);


// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
//
// console.log(data);
// });

// twitterKeys.get('favorites/list', function(error, tweets, response) {
//   if(error) throw error;
//   console.log(tweets);  // The favorites.
//   console.log(response);  // Raw response object.
// });
//console.log(random.txt);
