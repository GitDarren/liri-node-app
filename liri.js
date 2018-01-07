

//Accept user input 

var songOrMovie ="";
var command = process.argv[2];

for (var i=3; i < process.argv.length; i++) {
    songOrMovie += " " + process.argv[i];
  }
  console.log(songOrMovie.trim());

switch(command) {
    case "my-tweets":
        myTweets();
        break;
    case "spotify-this-song":
        spotifySong(songOrMovie);
        break;
    case "movie-this":
        movieThis(songOrMovie);
        break;
    case "do-what-it-says":
        doRandom();
        break;
    default: 
        console.log("Please put in the proper input");
}
//Based on user input, create a switch statement that evaluates the user input

//Run application based on switch statement case

//