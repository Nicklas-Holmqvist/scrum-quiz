window.addEventListener('load', main)

function main() {
    showGameSummary();    
}

// Globala variabler för spelaren

let playerName = localStorage.getItem("player-name")
let playerWins = parseInt(localStorage.getItem("player-wins"))
let playerGames = parseInt(localStorage.getItem("player-games"))
let playerGuesses = parseInt(localStorage.getItem("player-guesses"))

function showGameSummary() {
    document.querySelector('#player').innerHTML = "Grattis " + playerName + "!"
    document.querySelector('#guesses').innerHTML = "Du vann på " + playerGuesses + " gissningar."
    document.querySelector('#games').innerHTML = "Antal spelade spel: " + playerGames
    document.querySelector('#wins').innerHTML = "Antal vunna spel: " + playerWins

}