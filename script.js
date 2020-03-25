document.getElementById('rock').onclick = game;
document.getElementById('paper').onclick = game;
document.getElementById('scissors').onclick = game;

var playerSelection = ''; 
var computerSelection = '';
var playerScore = 0;
var computerScore = 0;

function game (){
    playerSelection = this.id;
    document.getElementById('playerChoice').innerHTML = `${playerSelection}`;
    computerSelection = computerPlay();
    
    if(playerSelection == 'rock' && computerSelection=='scissors' ||
        playerSelection =='scissors' && computerSelection=='paper' ||
        playerSelection == 'paper'&& computerSelection=='rock'){
            ++playerScore;

    }else if (playerSelection == 'scissors' && computerSelection=='rock' ||
        playerSelection =='paper' && computerSelection=='scissors' ||
        playerSelection == 'rock'&& computerSelection=='paper'){
            ++computerScore;
            
    }else if (playerSelection == computerSelection){
        playerScore = playerScore;
        computerScore = computerScore
    }
    
    if (playerScore === 5) { //resets once score is equal to 5
        alert('You win the game!');
        playerScore = 0; 
        computerScore = 0;
        document.getElementById('playerChoice').innerHTML = '';
        document.getElementById('computerChoice').innerHTML = '';
    }else if (computerScore === 5) {
        alert('You lost the game...')
        playerScore = 0; 
        computerScore = 0;
        document.getElementById('playerChoice').innerHTML = '';
        document.getElementById('computerChoice').innerHTML = '';
    }
    
    
    document.getElementById('playerScore').innerHTML = `${playerScore}`;
    document.getElementById('computerScore').innerHTML = `${computerScore}`;
}

function computerPlay () { // creates random generation of computer's choice
    let rpsArray = ['rock','paper','scissors'];
    let getRandom = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    document.getElementById('computerChoice').innerHTML = getRandom;
    return getRandom;
    }    










