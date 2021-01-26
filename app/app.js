window.addEventListener('load', main) 

function main() {
    prepareTheGame()
}

const activeBot = document.querySelectorAll('.bot');
const theGameBotColor = document.querySelector('.figure-2');
let botColor;


/**
 * Function that creates an random number between 1-20
 * use "randomNumber()" where you need an random number
*/
randomNumber()
function randomNumber() {
    const randomNr = Math.floor(Math.random()*20+1);

    return randomNr
}

/**
 * Function that sets focus on active bot on page Choose difficulty
 */
activeBot.forEach((e) => {

    e.addEventListener('click', () => {        
        if (e.classList.contains('bot-active')) {
            e.classList.remove('bot-active')
        }
        else if (!e.classList.contains('bot-active')) {   
            activeBot.forEach((i) => {
                i.classList.remove('bot-active')
            })
            e.classList.add('bot-active')

            if (e.classList.contains('figure-green')) {
                botColor = 1;
                localStorage.setItem("bot-color", botColor)
            }

            else if (e.classList.contains('figure-blue')) {
                botColor = 2;
                localStorage.setItem("bot-color", botColor)
            }

            else if (e.classList.contains('figure-red')) {
                botColor = 3;
                localStorage.setItem("bot-color", botColor)
            }
        }
    })
})  

//rule box javascript
const ruleBox = document.getElementById("ruleContBox"); //the whole rule box

const ruleButton = document.getElementById("rule-btn") //button that opens the rule box

const span = document.getElementsByClassName("close")[0]; //gets the <span> element (button) which closes the rule box  
     

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

/**
 * Function to prepare theGame with information from localstorage
 */
function prepareTheGame() {
    const botName = document.querySelector('.bot-name')
    const playerName = document.querySelector('.player-name')
    let fetchLSBotColor = JSON.parse(localStorage.getItem("bot-color"))
    //let fetchPlayersName = JSON.parse(localStorage.getItem("bot-color"))
    //playerName.innerText = "fetchPlayersName"
    
    if(fetchLSBotColor == 1){
        theGameBotColor.style.color = "green";
        botName.innerText = "Lätt"
    }    
    else if(fetchLSBotColor == 2){
        theGameBotColor.style.color = "blue";
        botName.innerText = "Medium"
    }    
    else if(fetchLSBotColor == 3){
        theGameBotColor.style.color = "red";
        botName.innerText = "Svår"
    }
}




