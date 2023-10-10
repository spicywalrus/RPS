
//Functions}
function playRound(playerSelection, computerSelection) {
    let roundResult = "tie";
    if (playerSelection === computerSelection){
        roundResult = "tie";
        return roundResult;
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        roundResult = "lose";
        return roundResult;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        roundResult = "win";
        return roundResult;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        roundResult = "win";
        return roundResult;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        roundResult = "lose";
        return roundResult;
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        roundResult = "win";
        return roundResult;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){ //probably much more efficient way to do this
        roundResult = "lose";
        return roundResult;
    }
    else {
        console.log("Edge Case, something is wrong.");
    }
  }
function getComputerChoice(){ //does this return a string?
    let rpsChoice = "poopie"; //initialized
    let rpsSelector = getRandomArbitrary(1,3); //select random # between 1 and 3
    switch (rpsSelector){ //assign and return selected string
        case '1':
            rpsChoice = "rock";
            return rpsChoice;
        case '2':
            rpsChoice = "paper";
            return rpsChoice;
        case '3':
            rpsChoice = "scissors";
            return rpsChoice;
        default:
            rpsChoice = "default rock";
            return rpsChoice;
    }
    
}
function getRandomArbitrary(min, max) { //Selects random number to help assign symbol choice
    return Math.random() * (max - min) + min;
}
function game(){
    playRound()//runs whole game
}
//Variables
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  let playerCounter = 0;
  let computerCounter = 0;
  console.log(playRound(playerSelection, computerSelection));

//Log