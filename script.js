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

// Check for a draw and print
if (pChoice === cChoice) {
    console.log(`Draw! ${pChoice} and ${cChoice} are equal`);
};

// Check with player choice rock
if (pChoice === "rock") {
    if (cChoice === "paper") {
        console.log(`You lose :( ${cChoice} beats ${pChoice}.`);
    } else if (cChoice === "scissors") {
        console.log(`You win! ${pChoice} beats ${cChoice}.`);
    }
};

// Check with player choice paper
if (pChoice === "paper") {
    if (cChoice === "scissors") {
        console.log(`You lose :( ${cChoice} beats ${pChoice}.`);
    } else if (cChoice === "rock") {
        console.log(`You win! ${pChoice} beats ${cChoice}.`);
    }
};

// Check with player choice scissors
if (pChoice === "scissors") {
    if (cChoice === "rock") {
        console.log(`You lose :( ${cChoice} beats ${pChoice}.`);
    } else if (cChoice === "paper") {
        console.log(`You win! ${pChoice} beats ${cChoice}.`);
    }
};