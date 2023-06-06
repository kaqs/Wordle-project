let guess = "rates";
let secretWord = "water";
let attempts = 0; // wordle game has 6 attempts

for (let indexSecret = 0; indexSecret < secretWord.length; indexSecret++) {

    for (let indexGuess = 0; indexGuess < guess.length; indexGuess++) {
        console.log(`(${indexSecret}, ${indexGuess})`);
        console.log(`(${secretWord[indexSecret]}, ${guess[indexGuess]})`);
        // console.log(`valor de indexSecret: ${indexSecret},`);
        // console.log(`valor de secretWord no index de indexSecret (secretWord[indexSecret]): ${secretWord[indexSecret]},`);

        // console.log(`valor de indexGuess: ${indexGuess},`);
        // console.log(`valor de guess no index de indexGuess (guess[indexGuess]): ${guess[indexGuess]},`);

    }

}


