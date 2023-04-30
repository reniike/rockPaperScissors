const userChoiceDisplay = document.getElementById('userChoice')
const computerChoiceDisplay = document.getElementById('computerChoice')
const resultDisplay = document.getElementById('result')
const allChoices = document.querySelectorAll('button')
const playerScore = document.getElementById('playerScore')
const computerScore = document.getElementById('computerScore')
const moves = document.getElementById('moves')
const computerMoves = document.getElementById('computerMoves')
const winner = document.getElementById('winner')
const restartGame = document.getElementById('restartGame')

let userChoice
let computerChoice
let result
let playerCount = 0
let computerCount = 0
let numberOfMoves = 10


allChoices.forEach(eachChoice => 
    eachChoice.addEventListener('click', (e) => {
        userChoice =  e.target.id
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice();
        getResult();
    }))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 )+ 1

    if (randomNumber === 1 ){
        computerChoice =  "scissors"
    }
    if (randomNumber === 2) {
        computerChoice = "rock"
    }
    if (randomNumber === 3) {
        computerChoice = "paper"
        
    }
    computerChoiceDisplay.innerHTML = computerChoice

}    

function getResult() {
    if (userChoice === computerChoice) {
        result = "Its a draw!"
        generateCount()
    }

    if (userChoice === "rock" && computerChoice === "scissors") {
        result = "You win!"
        generateCount()
    }
    if (userChoice === "scissors" && computerChoice === "paper") {
        result = "You win!"
        generateCount()
    }
    if (userChoice === "paper" && computerChoice === "rock") {
        result = "You win!"
        generateCount()
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
        result = "Computer wins!"
        generateCount()
    }
    if (computerChoice === "scissors" && userChoice === "paper") {
        result = "Computer wins!"
        generateCount()
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        result = "Computer wins!"
        generateCount()
    }
    resultDisplay.innerHTML = result
    
}

function generateCount() {
    if (result == "You win!") {
        
        if (numberOfMoves > 0) { 
            numberOfMoves--
        }
        playerCount++
        moves.innerHTML = numberOfMoves
        playerScore.innerHTML = playerCount
        gameWinner()
    }
    if (result == "Computer wins!") {
        
        if (numberOfMoves > 0) { 
            numberOfMoves--
        }
        computerCount++
        moves.innerHTML = numberOfMoves
        computerScore.innerHTML = computerCount
        gameWinner()
    }
}

function disableButton() {
    if (numberOfMoves == 0) {
        allChoices.forEach(eachChoice => eachChoice.disabled = true);
        numberOfMoves = 0;
        resultDisplay.innerHTML = "GAME OVER!";
        gameWinner();
    }
}


function gameWinner() {
    if (numberOfMoves == 0) {
        if (playerCount > computerCount) {
            winner.innerHTML = "You won this game!"
            numberOfMoves = 0
            disableButton()
        }else
        if (computerCount > playerCount) {
            winner.innerHTML = "Computer won this game!"
            numberOfMoves = 0
            disableButton()
        }else
        if(computerCount === playerCount){
            winner.innerHTML = "It's a tie!"
            numberOfMoves = 0
            disableButton()
        }
    }
}

restartGame.addEventListener('click', () => {
    location.reload()
  })
    
     