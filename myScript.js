// defining global variables
const choices = ["rock", "paper", "scissors"];
var playerScore = 0;
var computerScore = 0;
var roundCouter = 0;
var winner = "";
var liveComments = document.querySelector(".comments");
var playerScorecard = document.querySelector("#playerScorecard");
var computerScorecard = document.querySelector("#computerScorecard");
var finalMessage = document.querySelector(".finalMessage");

// adding animation to the image buttons
function handleMouseDown() {
  this.classList.add("button-press-animation");
}
function handleMouseUpOrLeave() {
  this.classList.remove("button-press-animation");
}

// defining click function (Plays playRound function with track of counter. if the counter exceeds, resets to the scores)
function handleClick(event) {
  if (roundCouter < 5) {
    playerSelection = event.target.id;
    playRound(playerSelection);
    roundCouter++;
  } else {
    // Reset if the counter exceeds 5
    liveComments.textContent = "Please reset to start a new game";
    playerScore = 0;
    computerScore = 0;
  }
}

// adding all click actions into the buttons
var allSelections = document.querySelectorAll(".selections > *"); // selecting the buttons
allSelections.forEach(function (button) {
  button.addEventListener("mousedown", handleMouseDown);  // the first three are animation related
  button.addEventListener("mouseup", handleMouseUpOrLeave);
  button.addEventListener("mouseleave", handleMouseUpOrLeave);
  button.addEventListener("click", handleClick); // this one is the click function
});

// game function. Before that defining the random computer choice function
// function for computer choices
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Defining RPS logic. takes up two choices and updates the scores and update the winner variable
function RPSGame(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    winner = "the player";
    playerScore++;
  } else {
    winner = "the computer";
    computerScore++;
  }
}

// Play a single round
function playRound(playerSelection) {
  
  var computerSelection = getComputerChoice();
  // Check for a tie and get a new computer choice if needed
  while (playerSelection === computerSelection) {
    computerSelection = getComputerChoice();
  }

  // determine who is the winner
  RPSGame(playerSelection, computerSelection);

  // updating the fields
  liveComments.textContent = `Round: ${roundCouter + 1}. 
  Player chose ${playerSelection}. Computer chose ${computerSelection}. The winner is ${winner}`;
  playerScorecard.textContent = `Player score: ${playerScore}`;
  computerScorecard.textContent = `Computer score: ${computerScore}`;
  if (roundCouter == 4) {
    if (playerScore > computerScore) {
      finalMessage.textContent = `The player`;
    }
    else {
    finalMessage.textContent = `The Computer`;
    }
  }
  else {
    finalMessage.textContent = ``;
  }
  
}

/////////////////////////////////////////

// // getting user clicks
// var allSelections = document.querySelectorAll(".selections > *");

// allSelections.forEach((selection) => {
//   // and for each one we add a 'click' listener
//   selection.addEventListener('click', () => {
//     playerSelection = selection.id;
//     playRound(playerSelection);
//   });
// });

// //// Working till now

// // text updater
// function updateFields(playerSelection, computerSelection, winner) {
//     liveComments.textContent = `Player chose ${playerSelection}. Computer chose ${computerSelection}. The ${winner} wins this time.`;
//     playerScorecard.textContent = `Player Score: ${playerScore}`;
//     computerScorecard.textContent = `Player Score: ${computerScore}`;
// }

// // play single round
// function playRound(playerSelection) {

//     var computerSelection = getComputerChoice();
//     // Check for a tie and get a new computer choice if needed
//     while (playerSelection === computerSelection.toLowerCase()) {
//         computerSelection = getComputerChoice();
//     }

//     // Determine the winner
//     if (
//         (playerSelection === 'rock' && computerSelection === 'scissors') ||
//         (playerSelection === 'paper' && computerSelection === 'rock') ||
//         (playerSelection === 'scissors' && computerSelection === 'paper')
//     ) {
//         playerScore++;
//         alert("somethi");
//         updateFields(playerSelection, computerSelection, player);
//     } else {
//         computerScore++;
//         updateFields(playerSelection, computerSelection, computer);
//     }
// }

// // getting user clicks
// var allSelections = document.querySelectorAll(".selections > *");

// allSelections.forEach((selection) => {
//   // and for each one we add a 'click' listener
//   selection.addEventListener('click', () => {
//     playerSelection = selection.id;
//     playRound(playerSelection);
//   });
// });

// // updating scores

// // game
// function game() {
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         const playerChoice = prompt("Enter your choice (Rock, Paper, or Scissors):");
//         const computerChoice = getComputerChoice();

//         console.log(`Round ${i + 1}:`);
//         console.log(`Player chose ${playerChoice}`);
//         console.log(`Computer chose ${computerChoice}`);

//         const roundResult = playRound(playerChoice, computerChoice);
//         console.log(roundResult);

//         // Update scores based on the result
//         if (roundResult.includes("Win")) {
//             playerScore++;
//         } else {
//             computerScore++;
//         }

//         console.log(`Score - Player: ${playerScore}, Computer: ${computerScore}\n`);
//     }

//     // Determine the overall winner
//     if (playerScore > computerScore) {
//         console.log("Congratulations! You win the game!");
//     } else if (playerScore < computerScore) {
//         console.log("Sorry, you lose the game.");
//     } else {
//         console.log("The game is a tie.");
//     }
// }
