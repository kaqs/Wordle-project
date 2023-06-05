let guess;
let secretWord = "water";
let attempts = 0; // wordle game has 6 attempts

while (guess != secretWord && attempts < 6) {
    attempts++;
    guess = prompt(`Please enter a word containing 5 letters`);
    if (guess == secretWord) {
        alert(`Amazing! You win!`);
    } else {
        alert(`"Incorrect! You still have ${6-attempts}"`);
    }
}

if (guess != secretWord) {
    alert(`Unlucky! The word was ${secretWord}`);
}

// approach using FOR statement
// for (let attempts = 0; attempts < 3; attempts++) {
//     guess = prompt(`"Please enter a number between ${min} and ${max}"`);
//     if (guess == secretNumber) {
//         alert(`"We have a winner! Congratulations, you got it right after ${attempts+1}"`);
//         break;
//     } else {
//         alert (`"Incorrect! You still have ${2-attempts}"`);
//     }
// } 