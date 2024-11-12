// variables

let round = 0;
let humanChoice = "";
let computerChoice = "";
let humanScore = 0;
let computerScore = 0;

// gets the computer's choice

function getComputerChoice() {
    let rng = Math.floor(Math.random() * 3);
    if (rng == 0) {
        return "rock";
    } else if (rng == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// plays a round when the user's choice is picked

let options = document.querySelector(".options-container");


