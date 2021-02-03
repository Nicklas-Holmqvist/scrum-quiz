window.addEventListener('load', main)

function main() {
    showGameSummary();   
    comparePlayerWithHighscore();
    showHighscore();
    updatePlayerList();
    updateLS();
}

// Global variables

let playerName = localStorage.getItem("player-name")
let playerWins = parseInt(localStorage.getItem("player-wins"))
let playerGames = parseInt(localStorage.getItem("player-games"))
let playerGuesses = parseInt(localStorage.getItem("player-guesses"))
let highscore = JSON.parse(localStorage.getItem("highscore"))
let playerWin = JSON.parse(localStorage.getItem("player-win"))
let player = {name: playerName, wins: playerWins, games: playerGames}
let playerList = JSON.parse(localStorage.getItem("player-list"))

/**
 * Function that displays a summary of the game and player statistics
 */
function showGameSummary() {
    if (playerWin === true) {
        document.querySelector('#player').innerHTML = "Grattis " + playerName + "!"
    }
    else {
        document.querySelector('#player').innerHTML = "Du förlorade!"        
    }

    document.querySelector('#guesses').innerHTML = playerGuesses
    document.querySelector('#games').innerHTML = playerGames
    document.querySelector('#wins').innerHTML = playerWins      
}

/**
 * Function that compares the player's score to the highscore
 */
function comparePlayerWithHighscore() {
    if (playerWin === true) {
        if (highscore === null || undefined) {
            highscore = [];
            highscore.push(player);
            highscore.push({name: "ingenspelare", wins: 0, games: 0});
            highscore.push({name: "ingenspelare", wins: 0, games: 0});
            highscore.push({name: "ingenspelare", wins: 0, games: 0});
            highscore.push({name: "ingenspelare", wins: 0, games: 0});
        }
        else {
            for (let i = 0; i < 3; i++) {
                if (playerWins > highscore[i].wins) {
                    if(playerName === highscore[i].name) {
                        highscore[i].wins = playerWins;
                        highscore[i].games = playerGames; 
                        break;           
                    }
                    else {
                        if(playerName === highscore[i+1].name) {
                            highscore.splice(i+1, 1)
                        }   
                        if(playerName === highscore[i+2].name) {
                            highscore.splice(i+2, 1)
                        }
                        highscore.splice(i, 0, player);
                        break;
                    }
                }
            }
            if (highscore.length > 5) {
                highscore.pop;
            }
        } 
    }    
}

/**
 * Function that updates the player stats in the list of players
 */

function updatePlayerList() {
    for(let i = 0; i < playerList.length; i++) {
        if (playerList[i].name === playerName) {
            playerList[i].wins = playerWins;
            playerList[i].games = playerGames;
            break;
        }
    }
} 

/**
 * Function that displays highscore top 3
 */
function showHighscore() {
    document.querySelector('#top1').innerHTML = highscore[0].name + ", " + highscore[0].wins + " vunna spel, " + highscore[0].games + " spelade spel";
    if (highscore[1].name !== "ingenspelare") {
        document.querySelector('#top2').innerHTML = highscore[1].name + ", " + highscore[1].wins + " vunna spel, " + highscore[1].games + " spelade spel";
    }
    if (highscore[2].name !== "ingenspelare") {
    document.querySelector('#top3').innerHTML = highscore[2].name + ", " + highscore[2].wins + " vunna spel, " + highscore[2].games + " spelade spel";
    }
}

/**
 * Function that updates the highscore and player info in local storage
 */
function updateLS() {
    localStorage.setItem('highscore',JSON.stringify(highscore));
    localStorage.setItem('player-list',JSON.stringify(playerList));
}