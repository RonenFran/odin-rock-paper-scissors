const announcement = document.getElementById("announcement");
announcement.textContent = "Rock-Paper-Scissors";
// playGame();

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const opponent = document.getElementById("opponent");
const player = document.getElementById("player");

rock.addEventListener("click", (e) => 
    playRound(e.target.textContent.toLowerCase(), getComputerChoice()));
paper.addEventListener("click", (e) => 
    playRound(e.target.textContent.toLowerCase(), getComputerChoice()));
scissors.addEventListener("click", (e) => 
    playRound(e.target.textContent.toLowerCase(), getComputerChoice()));

function getComputerChoice() {
    //Rock = 0, Paper = 1, Scissors = 2
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Returns -1 on tie or invalid round, 0 on computer win, 1 on human win
function playRound(human, computer) {
    // Tie
    if (human === computer) {
        announcement.textContent = "Tie, you both chose " + human + "!";
        return -1;
    } else if (human === "rock") {
        if (computer === "paper") {
            announcement.textContent = "You lose! Paper beats Rock.";
            opponent.textContent = Number(opponent.textContent) + 1;
        } else {
            announcement.textContent = "You win! Rock beats Scissors.";
            player.textContent = Number(player.textContent) + 1;
        }
    } else if (human === "paper") {
        if (computer === "scissors") {
            announcement.textContent = "You lose! Scissors beats Paper.";
            opponent.textContent = Number(opponent.textContent) + 1;
        } else {
            announcement.textContent = "You win! Paper beats Rock.";
            player.textContent = Number(player.textContent) + 1;
        }
    } else {
        if (computer === "rock") {
                announcement.textContent = "You lose! Rock beats Scissors.";
            opponent.textContent = Number(opponent.textContent) + 1;
        } else {
            announcement.textContent = "You win! Scissors beats Paper.";
            player.textContent = Number(player.textContent) + 1;
        }
    }

    if(opponent.textContent === "5") {
        opponent.textContent = "0";
        player.textContent = "0";
        announcement.textContent = "Your opponent has won."
    } else if (player.textContent === "5") {
        opponent.textContent = "0";
        player.textContent = "0";
        announcement.textContent = "Congratulations! You have won!";
    }
}