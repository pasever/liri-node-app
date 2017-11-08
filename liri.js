var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var keys = require("./keys.js");
var fs = require("fs");
var action = process.argv[2];
var searchRequest = process.argv[3];
var spotify = new Spotify(keys.spotifyKeys);
var omdbKey = keys.omdbKey.key;
var twitter = new Twitter(keys.twitterKeys);
var moment = require('moment');

switch (action) {

  case "spotify-this-song":
  case "spotify":
    if (searchRequest == null) {
      let empty = "The Sign";
      spotifyFunction(empty);
    } else {
      spotifyFunction(searchRequest);
    }
    break;


  case "my-tweets":
  case "tweet":
    tweetFunction();
    break;

  case "movie-this":
  case "movie":
    if (searchRequest == null) {
      let empty = "Mr. Nobody";
      movieFunction(empty);
    } else {
      movieFunction(searchRequest);
    }
    break;

  case "do-what-it-says":
  case "do":
    fs.readFile("random.txt", "utf8", function(error, data) {
      if (error) {
        return console.log(error);
      }
      var dataArr = data.split(",");
      var randomText = dataArr[1];
      spotifyFunction(randomText);
    });
    break;

  default:
    console.log("Error occurred while processing your request...");
    console.log("Please, enter the information you want to pull...");
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
    console.log("###############################################");
    console.log("Song: " + data.tracks.items[0].name);
    console.log("Artist: " + data.tracks.items[0].artists[0].name);
    console.log("Preview: " + data.tracks.items[0].preview_url);
    console.log("Album: " + data.tracks.items[0].album.name);
    console.log("###############################################");
  });
}

function movieFunction(req) {

  var url = "http://www.omdbapi.com/?t=" + req + "&apikey=" + omdbKey;

  request(url, {
    json: true
  }, (err, res, data) => {
    if (err) {
      return console.log(err);
    }
    console.log("###############################################");
    console.log("Title: " + data.Title);
    console.log("Year: " + data.Year);
    console.log("IMDB Rating: " + data.imdbRating);
    console.log("Rotten Tomatoes Rating: " + data.Ratings[1].Value);
    console.log("Country: " + data.Country);
    console.log("Language: " + data.Language);
    console.log("Plot: " + data.Plot);
    console.log("Actors: " + data.Actors);
    console.log("###############################################");
  });

}

function tweetFunction() {
  twitter.get('statuses/user_timeline', {
    count: 20
  }, function(error, tweets, response) {
    if (!error) {
      console.log("###############################################");
      for (i = 0; i < tweets.length; i++) {
        console.log((i + 1) + ". " + tweets[i].text);
        console.log(`Tweet created: ${tweets[i].created_at.substring(4, 19)}`);
        //let tweetTime = moment(tweets[i].created_at, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en').format('MM/DD/YYYY hh:mm A');
      }
      console.log("###############################################");
    } else if (error) {
      console.log(error);
    }
  });
}
