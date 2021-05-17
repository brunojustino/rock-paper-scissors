let userScore = 0
let computerScore = 0

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    switch(randomNumber){
        case 1: return "rock"
        case 2: return "paper"
        case 3: return "scissor"
    }
}

function userPlay() {
    result = window.prompt("Choose rock, paper or scissor").trim().toLowerCase();
    return result
}

function playRound(playerSelection, computerSelection){
    switch(playerSelection){
        case "rock":
            if(computerSelection == "scissor"){
                userScore++
                console.log("Rock beats Scissor. Player Win")
                break;
            } else if (computerSelection == "paper"){
                console.log("Paper beats Rock. Computer Win")
                computerScore++
                break;
            } else {
                console.log("Draw")
                break;
            }
        case "paper":
            if(computerSelection == "scissor"){
                console.log("Scissor beat Paper. Computer Win")
                computerScore++
                break;
            } else if(computerSelection == "rock"){
                console.log("Paper beats Rock. Player Win")
                userScore++
                break;
            } else {
                console.log("Draw")
                break;
            }
        case "scissor":
            if(computerSelection == "rock"){
                console.log("Rock beats Scissor. Computer Win")
                computerScore++
                break;
            } else if(computerSelection == "paper"){
                console.log("Scissor beat Paper. Player Win")
                userScore++
                break;
            } else {
                console.log("Draw")
                break;
            }
    } // end case

} // end play round function

function game(){
    for(i = 0; i < 5; i++){
    let userChoice = userPlay()
    let computerChoice = computerPlay()
    playRound(userChoice, computerChoice)
    console.log("Score:")
    console.log("Player: " + userScore)
    console.log("Computer: " + computerScore)
    console.log("=======================")
    }
}

game()