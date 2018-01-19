
////////////////////////Liri Homework Assignment//////////////////////


////////////Brings in .env variables///////////////////
require("dotenv").config();


const keys = require('./keys.js');

var Spotify = require('node-spotify-api');
var spotify= new Spotify(keys.spotify);

var Twitter = require('twitter');
var twitter = new Twitter(keys.twitter);

var Request = require('request');


////////////Creating global variables/////////////////////
var songOrMovie ="";
var command = process.argv[2];



for (var i=3; i < process.argv.length; i++) {
    songOrMovie += " " + process.argv[i];
  }
  console.log(songOrMovie.trim());

//////////////////Spotify Function Stuff////////////////////////

var spotifySong = function()    {
  spotify.search({
    type: 'track', 
    query: songOrMovie }, 
    function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data.tracks.items[0].artists[0].name);
  console.log(`This song is called ${data.tracks.items[0].name}`);
  });
}

//////////////////Twitter Function Stuff////////////////////////

var myTweets = function()   {
    var params = {screen_name: 'LiveAthlete'};
    twitter.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (error) {
        console.log(error);
        return;    
      } 
      for(var i = 0; i < 10 && i < tweets.length; i++)  {
          var tweetsText = tweets[i].text;
          var tweetsTime = tweets[i].created_at;
          console.log(tweetsText); 
          console.log(tweetsTime);  
         }

    }); 
}

var movieThis = function(songOrMovie)  {
    var queryUrl = "http://www.omdbapi.com/?t=" + songOrMovie + "&y=&plot=short&apikey=trilogy";
    Request(queryUrl, function (error, response, body) {
        var movieInfo = JSON.parse(body);
        var movieTitle = movieInfo.Title;
        var movieYear = movieInfo.Year;
        var movieIMDB = movieInfo.imdbRating;
        // var movieRotten = body.
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body);
  console.log(movieTitle, movieYear, movieIMDB);
  console.log(typeof body);
});

}

// Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.



switch(command) {
    case "my-tweets":
        myTweets();
        break;
    case "spotify-this-song":
        // const songName = process.argv[3];
        spotifySong(songOrMovie);
        break;
    case "movie-this":
        movieThis(songOrMovie);
        console.log("my movie fired")
        break;
    case "do-what-it-says":
        // doRandom();
        console.log("my random fired")
        break;
    default: 
        console.log(`Please put in the proper input, this shit you put in, ${command} isnt going to fly.`);
}


