// Set default player and computer scores to 0

// Create an array for the computer to choose from

// Create a func for the players choice 

// Create a func for the computers choice

// Create a func that plays a round of the game
// Add computer win, player win and draw into the func with if

// Create a func that checks for a winner and if there is a winner then who won, return result

// Create a func that calls games until someone wins

let pScore = 0;
let cScore = 0;

let choice = ["rock", "paper", "scissors"];


function playerChoice() {
    let playerSelection = prompt("Enter your choice:");
    let pSelectionLow = playerSelection.toLowerCase();
    let pChoice = pSelectionLow;
    return pChoice;
};

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
    cScore++
    pScore++
    round++
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
    round++
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
    round++
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
    round++
};

};

// Check For Winner
let checkForWinner = () => {
    if (pScore == 5) {
        return 'You Win! :)';
    } else if (cScore == 5) {
        return 'You Lose :(';
    }
}

let checkIfWin = () => {
    if (pScore == 5 || cScore == 5) {
        return true;
    }
}

// Play A Game
function game() {
    for () {
    console.log(playRound(playerChoice(), cChoice));
    console.log(`Round ${round}`);
    console.log(`Player Score: ${pScore}`);
    console.log(`Computer Score: ${cScore}`);
    };
};

console.log(game());