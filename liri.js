var twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var keys = require("./keys.js");
var fs = require("fs");
var input = process.argv[2];
var searchRequest = process.argv[3];


// var input = {

// textFile: function textFile() {
fs.readFile("random.txt", "utf8", function(error, data) {

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

switch (input) {
  case "spotify-this-song" || "spotify":
    console.log("It worked!");
    break;
  case "my-tweets":
    console.log("It tweeted!");
    break;
  case "movie-this":
    console.log("It movied!");
    break;
  case "do-what-it-says":
    console.log("It said!");
    break;
  default:
  console.log("Enter the info you want to pull...")

}
var spotify = new Spotify(keys.spotifyKeys);
spotify.search({
  type: 'track',
  query: searchRequest
}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  console.log(data);
});

// twitterKeys.get('favorites/list', function(error, tweets, response) {
//   if (error) throw error;
//   console.log(tweets); // The favorites.
//   console.log(response); // Raw response object.
// });
//console.log(random.txt);
