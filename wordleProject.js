let guess = "";
let secretWord = "water";
let attempts = 0; // wordle game has 6 attempts
let indexGuess;
let indexSecret;
let guessList = [];
let responseList = [];

do {
    let responseCheckList = [];
    let showMyMessage = '';

    attempts++;

    for (let i = 0; i < responseList.length; i++){
        showMyMessage = showMyMessage + guessList[i] + "\n" + responseList[i].join(" ") + "\n\n";
    }
   
    guess = prompt("Please enter a word containing 5 letters\n\n" + showMyMessage);
    let guessSplit = guess.split('').join('  ');
    guessList.push(guessSplit);

    for (indexGuess = 0; indexGuess < guess.length; indexGuess++) {
        let responseCheck = `✗`;

        for (indexSecret = 0; indexSecret < secretWord.length; indexSecret++) {

            if (guess[indexGuess] === secretWord[indexSecret] && indexGuess === indexSecret) {
                responseCheck = `✓`;

            } else if (guess[indexGuess] === secretWord[indexSecret] && indexGuess !== indexSecret) {
                responseCheck = `⍻`;

            }
        }

        responseCheckList.push(responseCheck);

    }
    responseList.push(responseCheckList);
    console.log(responseList);

} while (guess != secretWord && attempts <= 6)

if (guess === secretWord){
    alert ("Perfect! You win!")
}

console.log(responseList);
console.log(guessList);





