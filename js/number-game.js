// store all the varibles
var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;


function checkguess(){
	//display all the previous user guesses on the screen
	var userGuess = Number(guessField.value);
	if (guessCount === 1) {
		guesses.textContent = 'Previous Guesses: ';
	}
	guesses.textContent += userGuess + ' ';
  //if the user guess equals the random number generated end the game
	if (userGuess === randomNumber) {
		lastResult.textContent = 'Congratulations! you got it right!';
		lastResult.style.backgroundColor = 'green';
		lowOrHi.textContent = '';
		setGameOver();
	//else if the guess count reaches 10 the game is over
	} else if (guessCount === 10) {
		lastResult.textContent = '!!GAME OVER!!';
		setGameOver();
	//conditions to tell the user if the guess is to low or to high
	} else {
		lastResult.textContent = 'WRONG';
		lastResult.style.backgroundColor = 'red';
		if(userGuess < randomNumber) {
			lowOrHi.textContent = 'Last Guess was too low';
		}else if(userGuess > randomNumber){
			lowOrHi.textContent = 'Last guess was too high';
		}
	}
	//guess count goes up every time a guess is submited guess field is cleared
	guessCount++;
	guessField.value = '';
	guessField.focus();
}
//run the checkguess() method when the submit button is clicked
guessSubmit.addEventListener('click', checkguess);


function setGameOver() {
	//if the game is over disable the text field and the submit button
  guessField.disabled = true;
  guessSubmit.disabled = true;
	//create a new button if the game is over and run this method when reset button is clicked
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame(){
	//set the guess count back to 1
	guessCount = 1;
	//remove all text content from the screen
	var resetParas = document.querySelectorAll('.resultParas p');
	for (var i = 0 ; i < resetParas.length ; i++) {
		resetParas[i].textContent = '';
	}
	//remove the reset button
	resetButton.parentNode.removeChild(resetButton);
	//enable the guess and submit button
	guessField.disabled = false;
	guessSubmit.disabled = false;
	guessField.value = '';
	guessField.focus();
	lastResult.style.backgroundColor = 'white';
	randomNumber = Math.floor(Math.random() * 100) + 1;

}
