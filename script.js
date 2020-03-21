let playerScore = 0;
let computerScore = 0;

const computerSelection = computerPlay();
let playerSelection;

let display_playerChoice= document.getElementById('playerChoice').innerHTML = `${playerSelection}`;
let display_computerChoice = document.getElementById('computerChoice').innerHTML = `${computerSelection}`;

let display_playerScore = document.getElementById('playerScore').innerHTML = `${playerScore}`;
let display_computerScore = document.getElementById('computerScore').innerHTML = `${computerScore}`;

function computerPlay () {
    let rpsArray = ['rock','paper','scissors'];
    let getRandom = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    document.getElementById('computerChoice').innerHTML = getRandom;
    return getRandom;
}

function playerRock() {
   let playerSelection = 'rock';
   document.getElementById('playerChoice').innerHTML = playerSelection;
   return playerSelection;

}

function playerPaper() {
    let playerSelection = 'paper';
    document.getElementById('playerChoice').innerHTML = playerSelection;
    return playerSelection;
 
}

function playerScissors() {
    let playerSelection = 'scissors';
    document.getElementById('playerChoice').innerHTML = playerSelection;
    return playerSelection;
 
}

function playRound(playerSelection,computerSelection) {
    if(playerSelection == 'rock' && computerSelection=='scissors' ||
    playerSelection =='scissors' && computerSelection=='paper' ||
    playerSelection == 'paper'&& computerSelection=='rock'){
        playerScore++;
    }else if (playerSelection == 'scissors' && computerSelection=='rock' ||
    playerSelection =='paper' && computerSelection=='scissors' ||
    playerSelection == 'rock'&& computerSelection=='paper'){
        computerScore++;
    }else{
    
    }
}  

function game(computerScore,playerScore){
    for (let i=1; i<6; i++){

    }
    if (playerScore > computerScore){
        return 'Congrats, you win the game!'
    }else if (playerScore == computerScore){
        return 'It\'s a tie.';
    }else if (playerScore < computerScore){
        return 'You lost this game.'
    }
    else {
        return 'There was an error. Please try again.';
    }
    
}





