//localStorage.clear();

// Global variables

let playerName = "";
let playerList = JSON.parse(localStorage.getItem("player-list"))
let playerWins = 0;
let playerGames = 0;

function checkPlayerLogin() {
    
    if (playerList === null || undefined) {
        playerList = [];
        player = {name: playerName, wins: playerWins, games: playerGames}
        playerList.push(player);
    }
    else {
        for (let i = 0; i < playerList.length; i++) {
            if (playerList[i].name === playerName) {
                playerWins = playerList[i].wins;
                playerGames = playerList[i].games;
            }
        }
        if (playerGames === 0) {
            player = {name: playerName, wins: playerWins, games: playerGames}
            playerList.push(player);
        }

    }
}
 



//rule box javascript
const ruleBox = document.getElementById("ruleContBox"); //the whole rule box

const ruleButton = document.getElementById("rule-btn") //button that opens the rule box

const span = document.getElementsByClassName("close")[0]; //gets the <span> element (button) which closes the rule box  
     
const startGameButton = document.getElementById("start-button");


// Hover function for buttons
const hover = document.querySelectorAll('.btn-big');

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
        loginAndGoToBotPage()
    }  
}

startGameButton.addEventListener("click", loginAndGoToBotPage)

/**
 * Moves to the bots page
 */

function loginAndGoToBotPage() {
    playerName = document.getElementById("inputfield").value;
    if (playerName === "") {
        alert("Skriv in ditt namn för att börja spela")
    }
    else {
        checkPlayerLogin();
        savePlayerInLS();
        window.location.href="./bots.html";
    }
} 


/**
 * Saves player data in local storage
 */

function savePlayerInLS() {
    localStorage.setItem("player-name", playerName);
    localStorage.setItem("player-wins", playerWins);
    localStorage.setItem("player-games", playerGames);
    localStorage.setItem('player-list',JSON.stringify(playerList));
}