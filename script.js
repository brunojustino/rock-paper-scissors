let userScore = 0
let computerScore = 0

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissor');

let userScoreDisplay = document.querySelector("#userScore");
let computerScoreDisplay = document.querySelector("#computerScore");
let resultDisplay = document.querySelector("#result");
let finalResultDisplay = document.querySelector("#finalResult");
let resetButton = document.querySelector("#resetButton");

let imgs = document.querySelectorAll("img");

let game = imgs.forEach((e) => {
                e.addEventListener("click", () => {
                    let userChoice;
                if(e.getAttribute("id") == "rock"){
                    userChoice = "rock";
                    }
                    if(e.getAttribute("id") == "paper"){
                        userChoice = "paper";
                    }
                    if(e.getAttribute("id") == "scissor"){
                        userChoice = "scissor";
                    }
                    if(userScore == 5 || computerScore == 5) {
                        console.log("end game");
                    } else {
                        playRound(userChoice, computerPlay());
                    }     

                })// end event listener
            }) // end img foreach


function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    switch(randomNumber){
        case 1: return "rock"
        case 2: return "paper"
        case 3: return "scissor"
    }
}

function userPlay(choice) {
    return choice;
}

function addPoint(player){
    if(player == "user"){
        userScore++
        if(userScore == 5){
            userScoreDisplay.innerText = userScore;  
            finalResultDisplay.style.background = "rgba(51, 231, 45, 0.774)";
            finalResultDisplay.innerText = "Congratulatins. YOU WON!!!";
            resetButton.classList.remove('hidden');
        } else {
            userScoreDisplay.innerText = userScore;  
        }        
    }
    if(player == "computer"){
        computerScore++
        if(computerScore == 5){
            computerScoreDisplay.innerText = computerScore;
            finalResultDisplay.style.background = "rgba(231, 64, 64, 0.774)";
            finalResultDisplay.innerText = "Oh No. Computer Wins :(";
            resetButton.classList.remove('hidden');
        } else {
            computerScoreDisplay.innerText = computerScore;
        }
        
    }
}

function reset(){
    userScore = 0;
    computerScore = 0;
    computerScoreDisplay.innerText = computerScore;
    userScoreDisplay.innerText = userScore;  
    resultDisplay.innerText = "";
    finalResultDisplay.innerText = "";
    resetButton.classList.add('hidden');
}

function playRound(playerSelection, computerSelection){
    switch(playerSelection){
        case "rock":
            if(computerSelection == "scissor"){
                addPoint('user');              
                resultDisplay.innerText = "Rock beats Scissor. Player Win";
                console.log("Rock beats Scissor. Player Win")
                break;
            } else if (computerSelection == "paper"){
                addPoint('computer');
                resultDisplay.innerText = "Paper beats Rock. Computer Win";
                console.log("Paper beats Rock. Computer Win")
                break;
            } else {
                console.log("Draw")
                resultDisplay.innerText = "Draw";
                break;
            }
        case "paper":
            if(computerSelection == "scissor"){
                console.log("Scissor beat Paper. Computer Win");
                resultDisplay.innerText = "Scissor beat Paper. Computer Win";
                addPoint('computer');
                break;
            } else if(computerSelection == "rock"){
                console.log("Paper beats Rock. Player Win");
                resultDisplay.innerText = "Paper beats Rock. Player Win";
                addPoint('user');
                break;
            } else {
                console.log("Draw")
                resultDisplay.innerText = "Draw";
                break;
            }
        case "scissor":
            if(computerSelection == "rock"){
                console.log("Rock beats Scissor. Computer Win");
                resultDisplay.innerText = "Rock beats Scissor. Computer Win";
                addPoint('computer');
                break;
            } else if(computerSelection == "paper"){
                console.log("Scissor beat Paper. Player Win")
                resultDisplay.innerText = "Scissor beat Paper. Player Win";
                addPoint('user');
                break;
            } else {
                console.log("Draw")
                resultDisplay.innerText = "Draw";
                break;
            }
    } // end case

} // end play round function
