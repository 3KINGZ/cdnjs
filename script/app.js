let userInput = document.querySelector('input'); //selecting the input dom
let btn = document.querySelector('button'); //selecting the submit guess button

let guess = Math.floor(Math.random() * 100); //getting the guess randomly

let guesses = []; //array to store the guesses
let tries = 0; //initializing the tries with value of 0

if (guess === 42) {
	//if guess is 42
	alert('number of life');
}

function guessWasTooLow() {
	//function to run if user guess is too low
	let gwtl = document.querySelector('#lowhigh');
	gwtl.textContent = 'last guess was too low';
	gwtl.style.backgroundColor = 'red';
	userInput.value = ' ';
}

function guessWasTooHigh() {
	//function to run if user guess is greater than the guess
	let gwth = document.querySelector('#lowhigh');
	gwth.textContent = 'last guess was too high';
	gwth.style.backgroundColor = 'red';
	userInput.value = ' ';
}

function gameOver() {
	//function to run if user guess is up to 10
	let go = document.querySelector('#lowhigh');
	go.textContent = '!!!Game Over!!!';
	go.style.backgroundColor = 'red';
	userInput.setAttribute('disabled', 'true');
	userInput.value = ' ';
	let goBtn = document.createElement('button');
	goBtn.innerHTML = '<a href="index.html">Start new game</a>';
	goBtn.id = 'startnewgame';
	document.querySelector('#container').appendChild(goBtn);
}

function startNewGame() {}

function guessIsCorrect() {
	let gis = document.querySelector('#lowhigh');
	gis.textContent = 'Congratulations,guess is correct you guessed it in ' + tries + ' tries';
	gis.style.backgroundColor = 'green';
	userInput.setAttribute('disabled', 'true');
	let winBtn = document.createElement('button');
	winBtn.innerHTML = '<a href="index.html">Start new game</a>';
	document.querySelector('#container').appendChild(winBtn);
	winBtn.id = 'startnewgame';
	userInput.value = ' ';
}

function wrong() {
	//function when the input is wrong(a string type)
	let wrongInput = document.querySelector('#lowhigh');
	wrongInput.textContent = 'Wrong!';
	wrongInput.style.backgroundColor = 'red';
	userInput.value = ' ';
}

function displayHistory() {
	//function to display arrays in which the guess are being stored
	let lis = document.querySelector('#guesshistory');

	lis.textContent = 'Previous guesses: ' + guesses.join(' ');
}

//when the submit guess is click this function will run
function checkNum() {
	if (!isNaN(userInput.value)) {
		// i use isNaN to check if the user enter a string or a num;
		tries += 1;
		if (tries <= 9) {
			guesses.push(userInput.value);
			if (userInput.value < guess) {
				displayHistory();
				guessWasTooLow();
			} else if (userInput.value > guess) {
				displayHistory();
				guessWasTooHigh();
			} else {
				displayHistory();
				guessIsCorrect();
			}
		} else {
			gameOver();
		}
	} else if (userInput.value == ' ') {
		alert('guess the number');
	} else {
		tries += 1;
		guesses.push(userInput.value);
		displayHistory();
		wrong();
	}
}
