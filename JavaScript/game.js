//create secret number
var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number:"));

//check if guess is right
if(guess === secretNumber) {
	alert("CORRECT!");
}

//check if lower
else if(guess < secretNumber) {
	alert("Too low, guess higher");
}

//otherwise, check if higher
else {
	alert("Too high, guess lower");
}
