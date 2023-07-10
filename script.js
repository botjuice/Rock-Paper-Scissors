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
console.log(getComputerChoice());