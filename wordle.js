let guess = "";
let secretWord = "stone";
let guessList = [];

function returnExample(guess, secretWord) {
    if (guess != secretWord) {
        return 1 + 1;
    }
}


function submitGuess() {
    // retrieve user guess from input box
    guess = document.getElementById("guess").value;
    guessList.push(guess);
    console.log(guess);
    console.log(guessList);

    // call a function that receives the user guess as an argument, and returns anything as an example
    const result = returnExample(guess, secretWord);
    console.log(result);
}


function changeColour() {
    const inputElement = document.getElementById("guess");
    const inputElementvalue = inputElement.value;

    // try to loop the first 5 guessboxes and put any value and colour just as an example
    for (i = 0; i < 5; i++) {
        const id = "1" + i;
        const boxElement = document.getElementById(id);
        let guessBoxText = inputElementvalue[i].toUpperCase();
        boxElement.innerText = guessBoxText;
        boxElement.style.background = "grey"
    }

    
}



document.getElementById("submitbutton").onclick = submitGuess;

document.getElementById("testbutton").onclick = changeColour;


