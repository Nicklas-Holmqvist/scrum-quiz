//localStorage.clear();

// Global variables

let playerName = "";
let playerWins = 0;
let playerGames = 0;

//rule box javascript
const ruleBox = document.getElementById("ruleContBox"); //the whole rule box

const ruleButton = document.getElementById("rule-btn") //button that opens the rule box

const span = document.getElementsByClassName("close")[0]; //gets the <span> element (button) which closes the rule box  
     
const startGameButton = document.getElementById("start-button");

const hover = document.querySelectorAll('.btn-big');

// Hover function for buttons
hover.forEach((e) => {
    
    e.addEventListener("mouseover", () => {
        if (e.classList.contains('hoverbutton')) {
            e.classList.remove('hoverbutton')
        }
                
        else if (!e.classList.contains('hoverbutton')) {
            hover.forEach((i) => {
                i.classList.remove('hoverbutton')
            })
            e.classList.add('hoverbutton')  
        } 
    }
    )

    e.addEventListener("mouseout", () => {
        if (e.classList.contains('hoverbutton')) {
            e.classList.remove('hoverbutton')
        }
                
        // else if (!e.classList.contains('hoverbutton')) {
        //     hover.forEach((i) => {
        //         i.classList.remove('hoverbutton')
        //     })
        //     e.classList.add('hoverbutton')  
        // } 
    }
    )
}
)

//opens the rule box 
ruleButton.onclick = function() {
    ruleBox.style.display = "block";
}
//closes the rule box when clicked on the x, but the x doesnt show! can't be bothered to fix
span.onclick = function() {
    ruleBox.style.display = "none";
}
//closes the rule box when clicked outside of the rule box
window.onclick = function(event) {
    if (event.target == ruleBox) {
        ruleBox.style.display = "none";
    }
}

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {    
    let inputControl  = document.querySelector('#inputfield').value;

    if (key.keyCode == "13") {
        if(inputControl == "") {
            return
        }
        goToBotPage()
    }  
}

startGameButton.addEventListener("click", goToBotPage)

/**
 * Moves to the bots page
 */

function goToBotPage() {
    playerName = document.getElementById("inputfield").value;
    checkPlayerDetails();
    savePlayerInLS();
    window.location.href="./bots.html";
} 

/**
 * Checks and updates player details from local storage if player already exists
 */

function checkPlayerDetails() {
    let highscore = JSON.parse(localStorage.getItem("highscore"))
    if (highscore !== null || undefined) {
        for (i=0; i < highscore.length; i++) {
            if (highscore[i].name === playerName) {
                playerWins = highscore[i].wins;
                playerGames = highscore[i].games;
                break;
            }
        }
    }
} 

/**
 * Saves player data in local storage
 */

function savePlayerInLS() {
    localStorage.setItem("player-name", playerName);
    localStorage.setItem("player-wins", playerWins);
    localStorage.setItem("player-games", playerGames);
}