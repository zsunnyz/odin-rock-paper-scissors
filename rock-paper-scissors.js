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

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();   
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase();
    console.log(`You chose ${playerSelection}`)
    console.log(`Computer chose ${computerSelection}`)
    

    if((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Scissors' && computerSelection == 'Paper')){
        return `You win! ${playerSelection} beats ${computerSelection}}`;
    }
    else if (playerSelection == computerSelection){
        return 'You drew!'
    }
    else {
        return `You Lose! ${playerSelection} beats ${computerSelection}}`
    }
}

function game(){
    for (let i = 0; i < 5; i ++){
        let playerSelection = prompt("Enter rock, paper or scissors to play!");
        console.log(playRound(playerSelection, computerPlay()));
    }
}