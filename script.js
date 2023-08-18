let computerGuess;
let userGuesses = [];
let attempts = 0;
let maxGuesses;

let low = 1;
let high = 100;

function updateRange() {
    const rangeOutput = document.getElementById('rangeOutput');
    rangeOutput.innerText = `${low} - ${high}`;
    rangeOutput.style.marginLeft = low + '%';
    rangeOutput.style.marginRight = 100 - high + '%';
    rangeOutput.classList.add('flash');

    const lowValue = document.getElementById('low');
    lowValue.style.flex = low + '%';
    lowValue.style.background = "#ef7b54";

    const spaceValue = document.getElementById('space');
    spaceValue.style.flex = high - low + '%';
    spaceValue.style.background = "#83e1d0";

    const highValue = document.getElementById('high');
    highValue.style.flex = 100 - high + '%';
    highValue.style.background = "#ef7b54"; 
}

function init() {
    computerGuess = Math.floor(Math.random() * 100 + 1);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
}

function startGameView() {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

function gameEnd() {
    document.getElementById("newGameButton").style.display = "inline";
    document.getElementById("inputBox").setAttribute('readonly', 'readonly');
}

function reset() {
    computerGuess = Math.floor(Math.random() * 100 + 1);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
    document.getElementById("welcomeScreen").style.display = "block";
    document.getElementById("inputBox").removeAttribute('readonly');
    document.getElementById('inputBox').value = "";
    document.getElementById('textOutput').innerHTML = "Your guess:";
    userGuesses = [];
    attempts = 0;
    document.getElementById("guesses").innerHTML = "-";
    document.getElementById('attempts').innerHTML = "0";
    low = 0;
    high = 100;
    updateRange();
}

function easyMode() {
    maxGuesses = 10;
    startGameView();
}

function hardMode() {
    maxGuesses = 5;
    startGameView();
}

function compareGuess() {
    const userGuess = Number(document.getElementById('inputBox').value);
    userGuesses.push(" " + userGuess);
    document.getElementById("guesses").innerHTML = userGuesses;
    attempts++;
    if (attempts < maxGuesses) {
        if(userGuess > computerGuess) {
            if (userGuess < high) {
                high = userGuess;
            }
            document.getElementById('textOutput').innerHTML = "Your guess is to high";
            document.getElementById('inputBox').value = "";
        } else if(userGuess < computerGuess) {
            if (userGuess > low) {
                low = userGuess;
            }
            document.getElementById('textOutput').innerHTML = "Your guess is to low";
            document.getElementById('inputBox').value = "";
        } else {
            document.getElementById('textOutput').innerHTML = "DING DING DING! We've got an winner.<br> You've got it in just " + attempts + " attempts";
            gameEnd();
        }
    } else {
        if(userGuess != computerGuess) {
            document.getElementById('textOutput').innerHTML = "YOU LOSE! <br> The number was " + computerGuess;
        } else {
            document.getElementById('textOutput').innerHTML = "DING DING DING! We've got an winner.<br> You've got it in just " + attempts + " attempts";
        }
        gameEnd();
    }
    updateRange();
}