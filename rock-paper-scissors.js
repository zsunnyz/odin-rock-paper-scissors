document.querySelector('.close').onclick = () => document.querySelector('#modal-container').style.display="none";

let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let randomVal = Math.floor(Math.random() * 3);
    switch(randomVal){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function updateScore() {
    document.querySelector('.player-score').textContent = playerScore;
    document.querySelector('.computer-score').textContent = computerScore;
}

function updateChoices(playerSelection, computerSelection){
    switch(playerSelection){
        case 'Rock':
            document.querySelector('.player-img').textContent = '🪨';
            break;
        case 'Paper':
            document.querySelector('.player-img').textContent = '🗞️';
            break;
            case 'Scissors':
            document.querySelector('.player-img').textContent = '✂️';
            break;
    }
    switch(computerSelection){
        case 'Rock':
            document.querySelector('.computer-img').textContent = '🪨';
            break;
        case 'Paper':
            document.querySelector('.computer-img').textContent = '🗞️';
            break;
            case 'Scissors':
            document.querySelector('.computer-img').textContent = '✂️';
            break;
    }
}

function endGame(){
    if (playerScore > computerScore){
        document.querySelector('.modal-content > p').textContent = "Congratulations, you won!";
    }
    else{
        document.querySelector('.modal-content > p').textContent = "Better luck next time!";
    }
    
    document.querySelector(".final-score").textContent = `${playerScore} : ${computerScore}`;

    document.querySelector('#modal-container').style.display = "block";
    document.querySelector('.result').textContent = "First to score 5 points wins the game";
    document.querySelector('.selections').textContent = "Choose Your Weapon!";
    playerScore = 0; computerScore=0;
    updateScore();
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase();
     
    updateChoices(playerSelection, computerSelection);

    if((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Scissors' && computerSelection == 'Paper')){
        document.querySelector('.result').textContent = 'You Win!';
        document.querySelector('.player-score').textContent = `${playerSelection} beats ${computerSelection}`;
        playerScore += 1;
    }
    else if (playerSelection == computerSelection){
        document.querySelector('.result').textContent = 'You drew!';
        document.querySelector('.player-score').textContent = `You both chose ${playerSelection}`
    }
    else {
        document.querySelector('.result').textContent = 'You Lose!';
        document.querySelector('.player-score').textContent = `${playerSelection} beats ${computerSelection}`;
        computerScore += 1;
    }
    
    updateScore();
    if (playerScore == 5 || computerScore == 5) {
        endGame()
    }
}
