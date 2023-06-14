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

    // new variable created to be used/adjusted as necessary without affecting the original variable
    let internalSecretWord = secretWord;

    guess = document.getElementById("guess").value;

    const inputElement = document.getElementById("guess");
    const inputElementvalue = inputElement.value;

    // 1st loop: it assumes all the letters does not match and are not included in internalSecretWord (grey colour)
    for (indexGuess = 0; indexGuess < 5; indexGuess++) {
        const id = attempts.toString() + indexGuess.toString();
        const boxElement = document.getElementById(id);
        let guessBoxText = inputElementvalue[indexGuess].toUpperCase();
        boxElement.innerText = guessBoxText;
        boxElement.style.background = "#a6aba8";

        // this FOR statement loops through internalSecretWord and then compares the character and index of guess
        for (indexSecret = 0; indexSecret < internalSecretWord.length; indexSecret++) {

            // this IF statement identifies all characters that matches the position of internalSecretWord characters and their index (green colour)
            if (guess[indexGuess] === internalSecretWord[indexSecret] && indexGuess === indexSecret) {
                boxElement.style.background = "#2cb851";
                // the substring function returns a new string with the matched characters replaced by a *, preventing the original matched character being compared again.
                internalSecretWord = internalSecretWord.substring(0, indexSecret) + "*" + internalSecretWord.substring(indexSecret + 1, indexSecret.lenght);
            }
        }
    }

    // 2nd loop: it takes the outcome from first loop to compare if the remaining characters are included in internalSecretWord (yellow colour)
    for (indexGuess = 0; indexGuess < 5; indexGuess++) {
        const id = attempts.toString() + indexGuess.toString();
        const boxElement = document.getElementById(id);

        for (indexSecret = 0; indexSecret < internalSecretWord.length; indexSecret++) {

            if (guess[indexGuess] === internalSecretWord[indexSecret] && indexGuess !== indexSecret) {
                boxElement.style.background = "#dfe615";
                // the substring function returns a new string with the matched characters replaced by a *, preventing the original matched character being compared again.
                internalSecretWord = internalSecretWord.substring(0, indexSecret) + "*" + internalSecretWord.substring(indexSecret + 1, indexSecret.lenght);
            }
        }
    }

    if (guess === secretWord) {
        message.innerText = "Perfect! You win!";
    }
    attempts++
}
submit.onclick = submitGuess;


