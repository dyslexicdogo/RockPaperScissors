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
      finalMessage.textContent = `Congrats! The player won`;
    }
    else {
    finalMessage.textContent = `Better luck next time. The Computer won`;
    }
  }
  else {
    finalMessage.textContent = ``;
  }
}

// handeling the reset button
function resetFunction() {
  roundCouter = 0;
  liveComments.textContent = ``;
  playerScorecard.textContent = `Player score: 0`;
  computerScorecard.textContent = `Computer score: 0`;
  finalMessage.textContent = ``;
}
// Select the resetButton
var resetButton = document.querySelector("#resetButton");

// Link the resetFunction to the button's click event
resetButton.addEventListener("click", resetFunction);
