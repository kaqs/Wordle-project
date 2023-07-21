export function compareGuess(internalSecretWord, internalGuess, attempts) {

    const guessList = {};

    // 1st loop: it assumes all the letters does not match and are not included in internalSecretWord (grey colour)
    for (let indexGuess = 0; indexGuess < 5; indexGuess++) {
        const id = attempts.toString() + indexGuess.toString();
        
        guessList[id] = "grey";

        // this FOR statement loops through internalSecretWord and then compares the character and index of guess
        for (let indexSecret = 0; indexSecret < internalSecretWord.length; indexSecret++) {

            if (internalGuess[indexGuess] === internalSecretWord[indexSecret] && indexGuess === indexSecret) {
                guessList[id] = "green";
                // the substring function returns a new string with the matched characters replaced by a * and a @, preventing the original matched character being compared again.
                internalSecretWord = internalSecretWord.substring(0, indexSecret) + "*" + internalSecretWord.substring(indexSecret + 1, indexSecret.lenght);
                internalGuess = internalGuess.substring(0, indexGuess) + "@" + internalGuess.substring(indexGuess + 1, indexGuess.lenght);
            }
        }
    }

    // 2nd loop: it takes the outcome from first loop to compare if the remaining characters are included in secretWord (yellow colour)
    for (let indexGuess = 0; indexGuess < 5; indexGuess++) {
        const id = attempts.toString() + indexGuess.toString();
        
        for (let indexSecret = 0; indexSecret < internalSecretWord.length; indexSecret++) {

            if (internalGuess[indexGuess] === internalSecretWord[indexSecret] && indexGuess !== indexSecret && guessList[id] !== "green") { 
                guessList[id] = "yellow";
                internalSecretWord = internalSecretWord.substring(0, indexSecret) + "*" + internalSecretWord.substring(indexSecret + 1, indexSecret.lenght);
                internalGuess = internalGuess.substring(0, indexGuess) + "@" + internalGuess.substring(indexGuess + 1, indexGuess.lenght);            
            }
        }
    }
    return guessList;
}


