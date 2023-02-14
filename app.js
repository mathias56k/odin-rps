// Array of options the computer can choose from
const options = ['rock', 'paper', 'scissors'];

// Function that makes the computer choose from the provided array
function computerChoice() {
    let randomNum = Math.floor(Math.random() * options.length);
    let cChoice = options[randomNum];
    return cChoice;
};

// Function that gets the players input to the prompt, puts it in lowercase and checks if it exists in the options array
function playerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt('Choose Rock, Paper or Scissors');
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
};

// Function to check for round outcome
function checkWinner(player, computer) {
    if (player == computer) {
        return 'tie'
    } else if (
        (player == 'rock' && computer == 'scissors') ||
        (player == 'scissors' && computer == 'paper') ||
        (player == 'paper' && computer == 'rock')
        ) {
            return 'player';
        } else {
            return 'computer';
        }
}

// Function that plays a single round of RPS
function playRound(player, computer) {
    const result = checkWinner(player, computer);

    if (result == 'tie') {
        return 'It`s a Tie!'
    } else if (result == 'player') {
        return `You Win! ${player} beats ${computer}`
    } else {
        return `You Lose! ${computer} beats ${player}`
    }
};

// Function to play game and report if the game is won or lost
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const player = playerChoice();
        const computer = computerChoice();
        console.log(playRound(player, computer));
        if (checkWinner(player, computer) == 'player') {
            playerScore++;
        } else if (checkWinner(player, computer) == 'computer') {
            computerScore++;
        }
    }
    
    if (playerScore > computerScore) {
        console.log('You Won The Game!');
    } else if (playerScore < computerScore) {
        console.log('You Lost The Game :(');
    } else {
        console.log('The Game Was a Tie');
    }
}

// Call for game to be played on opening the website
game();