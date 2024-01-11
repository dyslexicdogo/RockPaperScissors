// defining global variables
const choices = ['rock', 'paper', 'scissors'];
var playerScore = 0;
var computerScore = 0;
var roundCouter = 0;
var liveComments = document.querySelector(".comments");


// function for computer choices
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() *  3);
    return choices[randomIndex];
}

// play single round
function playRound(playerSelection) {
    
    var computerSelection = getComputerChoice();
    // Check for a tie and get a new computer choice if needed
    while (playerSelection === computerSelection.toLowerCase()) {
        computerSelection = getComputerChoice();
    }

    // Determine the winner
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        liveComments.textContent = `Player chose ${playerSelection}. Computer chose ${computerSelection}. The player wins this time.`;
    } else {
        computerScore++;
        liveComments.textContent = `Player chose ${playerSelection}. Computer chose ${computerSelection}. The computer wins this time.`;
    }
}

// getting user clicks
var allSelections = document.querySelectorAll(".selections > *");

allSelections.forEach((selection) => {
  // and for each one we add a 'click' listener
  selection.addEventListener('click', () => {
    playerSelection = selection.id;
    playRound(playerSelection);
  });
});

// updating scores





// game
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Enter your choice (Rock, Paper, or Scissors):");
        const computerChoice = getComputerChoice();

        console.log(`Round ${i + 1}:`);
        console.log(`Player chose ${playerChoice}`);
        console.log(`Computer chose ${computerChoice}`);

        const roundResult = playRound(playerChoice, computerChoice);
        console.log(roundResult);

        // Update scores based on the result
        if (roundResult.includes("Win")) {
            playerScore++;
        } else {
            computerScore++;
        }

        console.log(`Score - Player: ${playerScore}, Computer: ${computerScore}\n`);
    }

    // Determine the overall winner
    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lose the game.");
    } else {
        console.log("The game is a tie.");
    }
}

