
//Functions
function promptPlayer(playerChoice){
    let lowerCaseChoice = toLowerCase(playerChoice);//take prompt and make string into all lowercase.
    playerSelection = lowerCaseChoice; //assign lowercase string to player selection
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        console.log("Tie. Redo.");
        //prompt player again
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("You lose!");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You win!");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You win!");
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        console.log("You lose!");
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log("You win!");
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){ //probably much more efficient way to do this
        console.log("You lose!");
    }
  }
function getComputerChoice(){ //does this return a string?
    let rpsChoice = "poopie"; //initialized
    let rpsSelector = getRandomArbitrary(1,3); //select random # between 1 and 3
    switch (rpsSelector){ //assign and return selected string
        case '1':
            rpsChoice = "rock";
        case '2':
            rpsChoice = "paper";
        case '3':
            rpsChoice = "scissors";
        default:
            "default rock";
        break;
    }
    console.log(rpsChoice);
    return rpsChoice; //should return switch statement result
    
}
function getRandomArbitrary(min, max) { //Selects random number to help assign symbol choice
    return Math.random() * (max - min) + min;
}
function game(){
    //runs whole game
}
//Variables
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

//Log