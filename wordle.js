import { generate, wordList } from "random-words";
import { fiveLetterWords } from "./five-letter-words-list";

let guessElement = document.getElementById("guess");
let guessLowerCase = "";
let secretWord = getSecretWord();
let indexGuess;
let indexSecret;
let attempts = 0;
let submit = document.getElementById("submitbutton");
let message = document.getElementById("message");
let newgame = document.getElementById("newgame");
let endgame = document.getElementById("endgame");

guessElement.focus();

function getSecretWord() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlSecret = urlParams.get('secret');
    return urlSecret ? urlSecret : generate({ minLength: 10000, maxLength: 5 }); //minLength limited to the maxLength
}

function onKeyUpHandler(event) {
    if (guessElement.value.length === 5) {
        submit.removeAttribute('disabled');
        isGuessValid();
    } else {
        submit.setAttribute('disabled', null);
    }
    if (event.key === "Enter") {
        event.preventDefault();
        submit.click();
    }
}

function isGuessValid() {
    guessLowerCase = guessElement.value.toLowerCase();
    if (!fiveLetterWords.includes(guessLowerCase)) {
        console.log("NOT A WORD");
        submit.setAttribute('disabled', null);
    }
}

/**
 * -  capture user guess
 * -  set the result from attempt 
 * -  check if guess is correct
 * -  reset game
 * @param {string} internalGuess - string that will be considered the user guess.
 * @param {string} internalSecretWord - string that will be considered the secret word.
 */
function submitGuess(internalGuess, internalSecretWord) {

    guessLowerCase = guessElement.value.toLowerCase();

    compareGuess(internalSecretWord, internalGuess);

    attempts++

    checkSecretWord()
    resetVar()
}



function compareGuess(internalSecretWord, internalGuess) {
    // 1st loop: it assumes all the letters does not match and are not included in internalSecretWord (grey colour)
    for (indexGuess = 0; indexGuess < 5; indexGuess++) {
        const id = attempts.toString() + indexGuess.toString();
        const boxElement = document.getElementById(id);
        let guessBoxText = guessLowerCase[indexGuess].toUpperCase();
        boxElement.innerText = guessBoxText;
        boxElement.dataset.color = "grey";

        // this FOR statement loops through internalSecretWord and then compares the character and index of guess
        for (indexSecret = 0; indexSecret < internalSecretWord.length; indexSecret++) {

            if (internalGuess[indexGuess] === internalSecretWord[indexSecret] && indexGuess === indexSecret) {
                boxElement.dataset.color = "green";
                // the substring function returns a new string with the matched characters replaced by a * and a @, preventing the original matched character being compared again.
                internalSecretWord = internalSecretWord.substring(0, indexSecret) + "*" + internalSecretWord.substring(indexSecret + 1, indexSecret.lenght);
                internalGuess = internalGuess.substring(0, indexGuess) + "@" + internalGuess.substring(indexGuess + 1, indexGuess.lenght);
            }
        }
    }

    // 2nd loop: it takes the outcome from first loop to compare if the remaining characters are included in secretWord (yellow colour)
    for (indexGuess = 0; indexGuess < 5; indexGuess++) {
        const id = attempts.toString() + indexGuess.toString();
        const boxElement = document.getElementById(id);

        for (indexSecret = 0; indexSecret < internalSecretWord.length; indexSecret++) {

            if (internalGuess[indexGuess] === internalSecretWord[indexSecret] && indexGuess !== indexSecret && boxElement.dataset.color !== "green") {
                boxElement.dataset.color = "yellow";
            }
        }
    }
}

function resetVar() {
    guessElement.value = "";
    guessElement.focus();
    submit.setAttribute('disabled', null);
}
function getRandomWinWord() {
    let winWord = ['Perfect', 'Amazing', 'Wonderful', 'Brilliant'];
    let length = winWord.length;
    let mathRandom = Math.random() * length;
    let mathFloor = Math.floor(mathRandom);
    return winWord[mathFloor];
}

function checkSecretWord() {
    if (guessLowerCase === secretWord) {
        guessElement.setAttribute('disabled', null);
        submit.style.visibility = "hidden"
        endgame.style.visibility = "visible";
        message.innerText = `"${getRandomWinWord()}! You win!"`;

    } else if (guessLowerCase !== secretWord && attempts == 6) {
        guessElement.setAttribute('disabled', null);
        submit.style.visibility = "hidden"
        endgame.style.visibility = "visible";
        message.innerText = `"Unlucky! The word is ${secretWord}!"`;
    }
}
function newGameReset() {
    for (let row = 0; row < 6; row++) {
        for (let column = 0; column < 5; column++) {
            const idReset = row.toString() + column.toString();
            const boxReset = document.getElementById(idReset);
            boxReset.dataset.color = "white";
            boxReset.innerText = "";
            submit.style.visibility = "visible";
            endgame.style.visibility = "hidden";
        }
    }
    attempts = 0;
    guessElement.disabled = false;
    guessElement.focus();
    secretWord = getSecretWord();
}

submit.onclick = () => {
    submitGuess(guessLowerCase, secretWord)
};
guessElement.onkeyup = onKeyUpHandler;
newgame.onclick = newGameReset;


