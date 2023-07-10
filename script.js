// computer randomely chooses Rock, Paper, or Scissors.
//  player then chooses one the three.

// same Weapon ==> draw
// scissors vs paper ==> scissors wins
// scissors vs rock ==> rock wins
// rock vs paper ==> paper wins

// 0 = rock , 1 = paper , 2 = scissors




/*  GetComputerChoice:
    randomely generate a number between 0 and 2 to use as the computer choice
    return the choice as a integer

    GetPlayerChoice:
    create a prompt asking the players choice
    if input is invalid request player to try again
    return choice as an integer

    playRound: (playerSelection, computerSelection)
    compare playerSelection with computerSelection
    if player = computer ==> draw
    if player = 0 and computer = 1 ==> comp wins
    if player = 0 and computer = 2 ==> player wins
    if player = 1 and computer = 0 ==> player wins
    if player = 1 and computer = 2 ==> comp wins
    if player = 2 and computer = 0 ==> comp wins
    if player = 2 and computer = 1 ==> player wins
    return the winner of the round

    game:
    while both comp and player have less than 5 points
    play rounds untill one of them has 5
    report the winner or loser at the end of the game
*/




let playerPoints = 0;
let computerPoints = 0;

//    randomely generate a number between 0 and 2 to use as the computer choice
function getComputerChoice() { return Math.floor((Math.random() * 3)) }


function getPlayerChoice() {
    // create a prompt asking the players choice
    let valid = false
    while (valid === false) {
        let playerChoice = prompt("choose your weapon: (Rock, Paper, or Scissors)").toLowerCase();


        // validate and return choice as integer
        switch (playerChoice) {
            case "rock":
                return 0;
                valid = true;
                break;
            case "paper":
                return 1;
                valid = true;
                break;
            case "scissors":
                return 2;
                valid = true;
                break;
            default:
                // if input is invalid request player to try again
                alert("Please choose a valid weapon")
                valid = false;
        }
    }
}


// if player wins then returns 0, if comp wins then returns 1, draw returns 3
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 0 & computerSelection === 1) {
        return 1;
    }
    else if (playerSelection === 0 & computerSelection === 2) {
        return 0;
    }
    else if (playerSelection === 1 & computerSelection === 0) {
        return 0;
    }
    else if (playerSelection === 1 & computerSelection === 2) {
        return 1;
    }
    else if (playerSelection === 2 & computerSelection === 0) {
        return 1;
    }
    else if (playerSelection === 2 & computerSelection === 1) {
        return 0;
    }
    else if (playerSelection === computerSelection) {
        return 3;
    }

}

// game:
// while both comp and player have less than 5 points
// play rounds until one of them has 5
// report the winner or loser at the end of the game

function game() {
    while (playerPoints < 5 & computerPoints < 5) {
        //alert(`🧔🏻‍♂️: ${playerPoints} 🤖: ${computerPoints}`)
        let winner;
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        winner = playRound(playerSelection, computerSelection);

        switch (winner) {
            case 0:
                playerPoints = playerPoints + 1;
                alert("You Win!!" + `        🧔🏻‍♂️: ${playerPoints} 🤖: ${computerPoints}`);
                break;
            case 1:
                computerPoints = computerPoints + 1;
                alert("You Lose!!" + `        🧔🏻‍♂️: ${playerPoints} 🤖: ${computerPoints}`);
                break;
            case 3:
                alert("It's a draw!" + `        🧔🏻‍♂️: ${playerPoints} 🤖: ${computerPoints}`)
                break;
            default:
                alert("some error occured");
        }
    }
    if (playerPoints === 5) {
        alert("congratulations, YOU are the WINNER!!! 👏🎉" + `   🧔🏻‍♂️: ${playerPoints} 🤖: ${computerPoints}`);
    }
    else {
        alert("BOOOHOOO you lose!! 😒😒😒" + `   🧔🏻‍♂️: ${playerPoints} 🤖: ${computerPoints}`)
    }
}

game();