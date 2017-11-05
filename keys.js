console.log('this is loaded');
require('dotenv').config();

let twitterKeys = {
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret
}

let spotifyKeys = {
  id: process.env.id,
  secret: process.env.secret
}

let twitKey = twitterKeys.consumer_key;
let spotKey = spotifyKeys.client_id;

module.exports = {
  twitterKeys: twitterKeys,
  spotifyKeys: spotifyKeys
}
