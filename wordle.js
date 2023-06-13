let guess = "";
let secretWord = "stone";
let guessList = [];
let indexGuess;
let indexSecret;
let attempts = 0;
let indexBoard;
let submit = document.getElementById("submitbutton");
let message = document.getElementById("messageendgame");

function submitGuess() {

    guess = document.getElementById("guess").value;

    const inputElement = document.getElementById("guess");
    const inputElementvalue = inputElement.value;

    for (indexGuess = 0; indexGuess < 5; indexGuess++) {
        const id = attempts.toString() + indexGuess.toString();
        const boxElement = document.getElementById(id);
        let guessBoxText = inputElementvalue[indexGuess].toUpperCase();
        boxElement.innerText = guessBoxText;


        for (indexSecret = 0; indexSecret < secretWord.length; indexSecret++) {

            if (guess[indexGuess] === secretWord[indexSecret] && indexGuess === indexSecret) {
                boxElement.style.background = "#2cb851";
                break;

            } else if (guess[indexGuess] === secretWord[indexSecret] && indexGuess !== indexSecret) {
                boxElement.style.background = "#dfe615";
                break;

            } else if (guess[indexGuess] !== secretWord[indexSecret] && indexGuess !== indexSecret) {
                boxElement.style.background = "#a6aba8";
            }
        }
    }

    if (guess === secretWord) {
        message.innerText = "Perfect! You win!";
    }
    attempts++

}


submit.onclick = submitGuess;


