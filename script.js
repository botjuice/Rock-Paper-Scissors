let playerPoints = 0;
let computerPoints = 0;
let totalPoints = 0;

const buttons = document.querySelectorAll('button');
const scoreBoard = document.querySelector('.score');
const announce = document.querySelector('.announce');
scoreBoard.textContent = `You: ${playerPoints} Bot: ${computerPoints}`;
//    randomely generate a number between 0 and 2 to use as the computer choice
function getComputerChoice() {
    let num = Math.floor((Math.random() * 3))
    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    }
    else if (num === 2) {
        return "scissors";
    } else {
        console.log("COMPUTER CHOICE ERROR!!!");
        return "ERROR";
    }
}

// if player wins then returns 0, if comp wins then returns 1, draw returns 3
function getWinner(playerSelection, computerSelection) {
    if (playerSelection === "rock" & computerSelection === "paper") {
        return 1;
    }
    else if (playerSelection === "rock" & computerSelection === "scissors") {
        return 0;
    }
    else if (playerSelection === "paper" & computerSelection === "rock") {
        return 0;
    }
    else if (playerSelection === "paper" & computerSelection === "scissors") {
        return 1;
    }
    else if (playerSelection === "scissors" & computerSelection === "rock") {
        return 1;
    }
    else if (playerSelection === "scissors" & computerSelection === "paper") {
        return 0;
    }
    else if (playerSelection === computerSelection) {
        return 3;
    }

}
function getScore(winner) {
    if (winner === 1) computerPoints++;
    else if (winner === 0) playerPoints++;
    totalPoints = playerPoints + computerPoints;
    return [playerPoints, computerPoints];
}
function announceWinner(){
    if (playerPoints > computerPoints) {
        announce.textContent = "Congratulations! You Win! 🎉🎉🎉"
    } else if (computerPoints > playerPoints) {
        announce.textContent = "BOOHOOO YOU LOOSE 😒😒😒"
    } else { console.log("Error Occured")}
}
function game(e) {
    let playerChoice = `${this.classList.value}`;
    winner = getWinner(playerChoice, getComputerChoice());
    getScore(winner);
    scoreBoard.textContent = `You: ${playerPoints} Bot: ${computerPoints}`;
    if (totalPoints >= 5) {
        announceWinner();
        buttons.forEach(button => { button.removeEventListener('click', game) });
    }
}

buttons.forEach(button => { button.addEventListener('click', game) });