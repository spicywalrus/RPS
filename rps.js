
//Functions
function playRound(playerSelection, computerSelection) {
    // your code here!
  }
function getComputerChoice(){
    let rpsChoice = "rock";
    let rpsSelector = getRandomArbitrary(1,3);
    switch (rpsSelector){
        case '1':
            rpsChoice = "rock";
        case '2':
            rpsChoice = "paper";
        case '3':
            rpsChoice = "scissors";
    }
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
//Variables
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));