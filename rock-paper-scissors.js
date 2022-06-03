let resultContainer = document.querySelector('.result');
let selectionsContainer = document.querySelector('.selections');
let playerContainer = document.querySelector('.player-score');
let computerContainer = document.querySelector('.computer-score');

let playerSelectionContainer = document.querySelector('.player-img');
let computerSelectionContainer = document.querySelector('.computer-img');

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
    playerContainer.textContent = playerScore;
    computerContainer.textContent = computerScore;
}

function updateChoices(playerSelection, computerSelection){
    switch(playerSelection){
        case 'Rock':
            playerSelectionContainer.textContent = '🪨';
            break;
        case 'Paper':
            playerSelectionContainer.textContent = '✂️';
            break;
        case 'Scissors':
            playerSelectionContainer.textContent = '🗞️';
            break;
    }
    switch(computerSelection){
        case 'Rock':
            computerSelectionContainer.textContent = '🪨';
            break;
        case 'Paper':
            computerSelectionContainer.textContent = '✂️';
            break;
        case 'Scissors':
            computerSelectionContainer.textContent = '🗞️';
            break;
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase();
     
    updateChoices(playerSelection, computerSelection);

    if((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Scissors' && computerSelection == 'Paper')){
        resultContainer.textContent = 'You Win!';
        selectionsContainer.textContent = `${playerSelection} beats ${computerSelection}`;
        playerScore += 1;
    }
    else if (playerSelection == computerSelection){
        resultContainer.textContent = 'You drew!';
        selectionsContainer.textContent = `You both chose ${playerSelection}`
    }
    else {
        resultContainer.textContent = 'You Lose!';
        selectionsContainer.textContent = `${playerSelection} beats ${computerSelection}`;
        computerScore += 1;
    }
    
    updateScore();
}
