let guess = "";
let secretWord = "water";
let attempts = 0; // wordle game has 6 attempts
let indexGuess;
let indexSecret;
let guessList = [];
let responseList = [];

do {
    let responseCheckList = [];

    attempts++;

   
    let guessListMessage = guessList.join("\n");
    console.log(guessListMessage);
    let responseListMessage = responseList.join("\n");
    console.log(responseListMessage);

    
    guess = prompt("Please enter a word containing 5 letters\n" + guessListMessage + "\n" + responseListMessage);
    guessList.push(guess);

    for (indexGuess = 0; indexGuess < guess.length; indexGuess++) {
        let responseCheck = `"${guess[indexGuess]} ✗"`;

        for (indexSecret = 0; indexSecret < secretWord.length; indexSecret++) {

            if (guess[indexGuess] === secretWord[indexSecret] && indexGuess === indexSecret) {
                responseCheck = `"${guess[indexGuess]} ✓"`;

            } else if (guess[indexGuess] === secretWord[indexSecret] && indexGuess !== indexSecret) {
                responseCheck = `"${guess[indexGuess]} ⍻"`;

            }
        }

        responseCheckList.push(responseCheck);

    }
    responseList.push(responseCheckList);
    console.log(responseList);

} while (guess != secretWord && attempts <= 6)

console.log(responseList);
console.log(guessList);





