
////////////////////////Liri Homework Assignment//////////////////////

console.log("hello World");

////////////Brings in .env variables///////////////////
require("dotenv").config();


const keys = require('./keys.js');

var Spotify = require('node-spotify-api');
var spotify= new Spotify(keys.spotify);


////////////Creating global variables/////////////////////
var songOrMovie ="";
var command = process.argv[2];

// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

for (var i=3; i < process.argv.length; i++) {
    songOrMovie += " " + process.argv[i];
  }
  console.log(songOrMovie.trim());

////////////////////Spotify Function Stuff////////////////////////

var spotifySong = function()    {
  spotify.search({
    type: 'track', 
    query: songOrMovie }, 
    function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data.tracks); 
  });
}












switch(command) {
    case "my-tweets":
        // myTweets();
        console.log("my tweets fired")
        break;
    case "spotify-this-song":
        // const songName = process.argv[3];
        spotifySong(songOrMovie);
        console.log("my spotify fired")
        break;
    case "movie-this":
        // movieThis(songOrMovie);
        console.log("my movie fired")
        break;
    case "do-what-it-says":
        // doRandom();
        console.log("my random fired")
        break;
    default: 
        console.log(`Please put in the proper input, this shit you put in, ${command} isnt going to fly.`);
}
//Based on user input, create a switch statement that evaluates the user input

//Run application based on switch statement case

//