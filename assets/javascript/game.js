//Letter choices available
var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = 0;



//Lets the computer select a random letter from the available choices
var computerGuess = options[Math.floor(Math.random() * options.length)];

//Allows the user 9 guesses
var updateGuessesLeft = function() {
  // Setting HTML element to number of guesses left till loss
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.options[Math.floor(Math.random() * this.options.length)];
};
var updateGuessesSoFar = function() {
  // Display for previously guessed letters
  document.querySelector('#left').innerHTML = "Incorrect guesses: " + guessedLetters.join(', ');
};

// Reset function
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


//Guess = release of key, modified to lower case
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();
  console.log(letterToGuess);

        if (guessesLeft > 0){
            if (userGuess === letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Well done!");
                reset();
                console.log(letterToGuess);
            }
        }
        else if(guessesLeft === 0){
            // Updates losses on HTML 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Better luck next time");
            reset();
            console.log(letterToGuess);
        }
};