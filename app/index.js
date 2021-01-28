//rule box javascript
const ruleBox = document.getElementById("ruleContBox"); //the whole rule box

const ruleButton = document.getElementById("rule-btn") //button that opens the rule box

const span = document.getElementsByClassName("close")[0]; //gets the <span> element (button) which closes the rule box  
     
const startGameButton = document.getElementById("start-button");

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


startGameButton.addEventListener("click", savePlayerInLS);

/**
 * Function that saves a new player in local storage and then changes to the bot-page
 */

function savePlayerInLS() {
    let playerName = document.getElementById("inputfield").value;
    localStorage.setItem("player-name", playerName);
    localStorage.setItem("player-wins", "0")
    localStorage.setItem("player-games", "0")
    window.location.href="./bots.html";
}