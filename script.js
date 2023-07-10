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

*/

    




//    randomely generate a number between 0 and 2 to use as the computer choice
function getComputerChoice() { return Math.floor((Math.random() * 3) ) }
let computerSelection = getComputerChoice();

function getPlayerChoice() {
    // create a prompt asking the players choice
    let valid = false
    while (valid === false) {
        let playerChoice = prompt("choose your weapon: (Rock, Paper, or Scissors)").toLowerCase();
        
        
        // validate and return choice as integer
        switch(playerChoice){
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
let playerSelection = getPlayerChoice();

// if player wins then returns 0, if comp wins then returns 1, draw returns 3
function playRound(playerSelection,computerSelection) {
    if (playerSelection === 0 & computerSelection === 1)
    {
        alert("You Lose!!");
        return 1;
    }
    else if (playerSelection === 0 & computerSelection === 2) 
    {
        alert("You Win!!"); 
        return 0;
    }
    else if (playerSelection === 1 & computerSelection === 0) 
    {
        alert("You Win!!"); 
        return 0;
    }
    else if (playerSelection === 1 & computerSelection === 2) 
    {
        alert("You Lose!"); 
        return 1;
    }
    else if (playerSelection === 2 & computerSelection === 0)
     {
        alert("You Lose!"); 
        return 1;
    }
    else if (playerSelection === 2 & computerSelection === 1) 
    {
        alert("You Win!!"); 
        return 0;
    }
    else if (playerSelection === computerSelection)
    {
        alert("It's a draw!")
        return 3; 
    }

}
playRound(playerSelection, computerSelection);