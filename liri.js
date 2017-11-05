var twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var keys = require("./keys.js");
var fs = require("fs");
var input = process.argv[2];
var searchRequest = process.argv[3];
var spotify = new Spotify(keys.spotifyKeys);

// var spot = spotify.search({
//   type: 'track',
//   query: searchRequest,
//   limit: 1
// }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
//   console.log(JSON.stringify(data.tracks.items[0], null, 2));
//
// });


// var input = {

// textFile: function textFile() {
// fs.readFile("random.txt", "utf8", function(error, data) {
//
//   if (error) {
//     return console.log(error);
//   }
//   var dataArr = data.split(",");
//   var randomText = dataArr[1];
//   console.log( typeof randomText);
//
// });
//console.log(input);
//   }
//
//
// }

switch (input) {

  //case "spotify-this-song":
  case "spotify":
    spotifyFunction(searchRequest);

    break;

  case "my-tweets":
  case "tweet":

    console.log("It tweeted!");
    break;

  case "movie-this":
  case "movie":
    console.log("It movied!");
    break;

  case "do-what-it-says":
  case "do":
    fs.readFile("random.txt", "utf8", function(error, data) {

      if (error) {
        return console.log(error);
      }
      var dataArr = data.split(",");
      var randomText = dataArr[1];
      console.log(typeof randomText);
      spotifyFunction(randomText);

    });
    console.log("Option 4");
    break;

  default:
    console.log("Enter the info you want to pull...")

}

function spotifyFunction(req) {

  spotify.search({
    type: 'track',
    query: req,
    limit: 1
  }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
      console.log(JSON.stringify(data.tracks.items[0], null, 2));

  });
}

// twitterKeys.get('favorites/list', function(error, tweets, response) {
//   if (error) throw error;
//   console.log(tweets); // The favorites.
//   console.log(response); // Raw response object.
// });
//console.log(random.txt);
