let guess = "rates";
let secretWord = "water";
let attempts = 0; // wordle game has 6 attempts
let indexGuess;
let indexSecret;
let responseList = [];

for (indexGuess = 0; indexGuess < guess.length; indexGuess++) {
    let response = `"${guess[indexGuess]} ✗"`;

    for (indexSecret = 0; indexSecret < secretWord.length; indexSecret++) {

        //console.log(guess.includes(secretWord[indexSecret]));

        if (guess[indexGuess] === secretWord[indexSecret] && indexGuess === indexSecret) {
            response = `"${guess[indexGuess]} ✓"`;

            //console.log(`(${indexSecret}, ${indexGuess})`);
            //console.log(`(${secretWord[indexSecret]}, ${guess[indexGuess]})`);
        } else if (guess[indexGuess] === secretWord[indexSecret] && indexGuess !== indexSecret) {
            response = `"${guess[indexGuess]} ⍻"`;

            //console.log(`(${indexSecret}, ${indexGuess})`);
            //console.log(`(${secretWord[indexSecret]}, ${guess[indexGuess]})`);
        }
        // // console.log(`valor de indexSecret: ${indexSecret},`);
        // console.log(`valor de secretWord no index de indexSecret (secretWord[indexSecret]): ${secretWord[indexSecret]},`);

        // console.log(`valor de indexGuess: ${indexGuess},`);
        // console.log(`valor de guess no index de indexGuess (guess[indexGuess]): ${guess[indexGuess]},`);

    }
    responseList.push(response);
}
console.log(responseList);




