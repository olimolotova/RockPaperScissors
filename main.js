let round = 1
let userScore = 0;
let computerScore = 0;

const optionsContainer = document.querySelector('.options-container');
const computerChoice = document.querySelector('.computer-choice');
const scoreCard = document.querySelector('.score-card');
const resetContainer = document.querySelector('.reset-container');

let resetBtn = document.createElement("button");
resetBtn.classList.add("reset");
resetBtn.textContent = "Play again?";

function getComputerInput() {
    const possibleGuesses = ["rock", "paper", "scissors"];
    return possibleGuesses[Math.floor(Math.random() * 3)];
}

function playRound(userInput, computerInput) {
    computerChoice.textContent = computerInput;
    if (userInput == computerInput) {
        scoreCard.textContent = "This round was a draw.";
    } else {
        if (userInput == "rock") {
            if (computerInput == "paper") {
                computerScore++
            } else {
                userScore++
            }
        } else if (userInput == "paper") {
            if (computerInput == "scissors") {
                computerScore++
            } else {
                userScore++
            }
        } else {
            if (computerInput == "rock") {
                computerScore++
            } else {
                userScore++
            }
        }
    }
}

function playGame(e) {
    playRound(e.target.id, getComputerInput());
    round++
    if (round > 5) {

        resetContainer.appendChild(resetBtn);

        if (userScore > computerScore) {
            scoreCard.textContent = "You win! Congratulations!";
        } else if (computerScore > userScore) {
            scoreCard.textContent = "You lose.";
        } else {
            scoreCard.textContent = "It's a tie!";
        }
    } else {
        scoreCard.textContent = `${userScore} - ${computerScore}`;
    }
}

function resetGame () {
    round = 1;
    userScore = 0;
    computerScore = 0;
    resetContainer.removeChild(resetBtn);
    scoreCard.textContent = "0 - 0";
    computerChoice.textContent = "";
}

optionsContainer.addEventListener("click", playGame);
resetBtn.addEventListener("click", resetGame);
