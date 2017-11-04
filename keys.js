console.log('this is loaded');

let twitterKeys = {
  consumer_key: '4iKlbq6G6nr3zZTF2tIVZLAwS',
  consumer_secret: 'lS29Yu5wRqIeFYc5EWAobq9tAUWzofqLIqTP2MPwglA3cQ9nMu',
  access_token_key: '925167641995698178-h7zeDQSiuGg6HlySo85Uq9lJNDdpcKH',
  access_token_secret: 'riR1AXgUusrYGGLDnyAWB4oIXPhQCDhMF7GBJsf0NSLme'
}

let spotifyKeys = {
  client_id: "d12c8457daae406b9148b4dfa362485a",
  client_secret: "b3214bc0f5ad4f7cb0cc2107fc62416b"
}

let twitKey = twitterKeys.consumer_key;
//console.log(twitKey);

let spotKey = spotifyKeys.client_id;
//console.log(spotKey);


module.exports = {
  twitterKeys: twitterKeys,
  spotifyKeys: spotifyKeys
}
