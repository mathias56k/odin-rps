// Set the scores of the player and computer to 0
let playerScore = 0;
let computerScore = 0;

// Array of options the computer can choose from
let choicesForPC = ['rock', 'paper', 'scissors'];

// Function that makes the computer choose from the provided array
function computerChoice() {
    let randomNum = Math.floor(Math.random() * choicesForPC.length);
    let cChoice = choicesForPC[randomNum];
    return cChoice;
};

// Function that gets the players input to the prompt
function playerChoice() {
    let playerSelection = prompt('Enter your choice:');
    let pChoice = playerSelection.toLowerCase();         // Format the players choice to lowercase
    return pChoice;
};

 console.log(playerChoice());
 console.log(computerChoice());