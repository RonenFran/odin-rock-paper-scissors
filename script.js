alert("Welcome to rock paper scissors");
playGame();

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", (e) => 
    playRound(e.target.textContent.toLowerCase, getComputerChoice));
paper.addEventListener("click", (e) => 
    playRound(e.target.textContent.toLowerCase, getComputerChoice));
scissors.addEventListener("click", (e) => 
    playRound(e.target.textContent.toLowerCase, getComputerChoice));



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
        alert("Tie, you both chose " + human + "!");
        return -1;
    } else if (human === "rock") {
        if (computer === "paper") {
            alert("You lose! Paper beats Rock.");
            return 0;
        } else {
            alert("You win! Rock beats Scissors.");
            return 1;
        }
    } else if (human === "paper") {
        if (computer === "scissors") {
            alert("You lose! Scissors beats Paper.");
            return 0;
        } else {
            alert("You win! Paper beats Rock.");
            return 1;
        }
    } else {
        if (computer === "rock") {
                alert("You lose! Rock beats Scisosrs.");
            return 0;
        } else {
            alert("You win! Scissors beats Paper.");
            return 1;
        }
    }
}

function playGame() {

    // Keep track of scores
    let humanScore = 0;
    let computerScore = 0;
    // Keep track of rounds
    let round = 0;
    // Keep track of game state
    let keepGoing = true;

    // Loop rounds
    while(keepGoing) {
        // Display round counter
        alert(`Round ${++round}`);

        // Get choices
        const computer = getComputerChoice();
        const human = getHumanChoice();

        // Get round winner
        let roundWinner = playRound(human, computer);

        // Update points
        if (roundWinner === 0) {
            computerScore++;
        } else if (roundWinner === 1) {
            humanScore++;
        }

        if(computerScore === 3 || humanScore === 3) {
            keepGoing = false;
        }

        alert("Scores are human: " + humanScore + " and computer: " + computerScore);
    }      

    if (humanScore === 3) {
        alert("Congratulations! You win!");
    } else {
        alert("Sorry! You lose!");
    }
}
