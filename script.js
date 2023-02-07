let pScore = 0;
let cScore = 0;
let round = 1

let choice = ["rock", "paper", "scissors"];


let playerSelection = prompt("Enter your choice:");
let pSelectionLow = playerSelection.toLowerCase();
let pChoice = pSelectionLow;

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * choice.length);
    let compChoice = choice[randNum];
    return compChoice;
};

let cChoice = getComputerChoice();

// Play a round
function playRound(pChoice, cChoice){

// Check for a draw and print
if (pChoice === cChoice) {
    return(`Draw! ${pChoice} and ${cChoice} are equal`);
};

// Check with player choice rock
if (pChoice === "rock") {
    if (cChoice === "paper") {
        cScore++
        return(`You lose :( ${cChoice} beats ${pChoice}.`);
    } else if (cChoice === "scissors") {
        pScore++
        return(`You win! ${pChoice} beats ${cChoice}.`);
    }
};

// Check with player choice paper
if (pChoice === "paper") {
    if (cChoice === "scissors") {
        cScore++
        return(`You lose :( ${cChoice} beats ${pChoice}.`);
    } else if (cChoice === "rock") {
        pScore++
        return(`You win! ${pChoice} beats ${cChoice}.`);
    }
};

// Check with player choice scissors
if (pChoice === "scissors") {
    if (cChoice === "rock") {
        cScore++
        return(`You lose :( ${cChoice} beats ${pChoice}.`);
    } else if (cChoice === "paper") {
        pScore++
        return(`You win! ${pChoice} beats ${cChoice}.`);
    }
};

};

// Play a game
function game() {
    console.log(playRound(pChoice, cChoice));
    console.log(pScore);
    console.log(cScore);
}

console.log(game());