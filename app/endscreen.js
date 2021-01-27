window.addEventListener('load', main)

function main() {
    
}

// Globala variabler för spelaren

let playerName = localStorage.getItem("player-name")
let playerWins = parseInt(localStorage.getItem("player-wins"))
let playerGames = parseInt(localStorage.getItem("player-games"))
let playerGuesses = parseInt(localStorage.getItem("player-guesses"))

