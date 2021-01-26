window.addEventListener('load', main) 

function main() {
    addEventListeners()
}

function addEventListeners() {    
    prepareTheGame()
    countdown()
}

const activeBot = document.querySelectorAll('.bot');
const theGameBotColor = document.querySelector('.figure-2');
let botColor;
const timeLeftP = document.querySelector('.time-left')
let count = 10;
console.log(count)

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

/**
 * Function to prepare theGame with information from localstorage
 */
function prepareTheGame() {
    const botName = document.querySelector('.bot-name')
    const playerName = document.querySelector('.player-name')
    let fetchLSBotColor = JSON.parse(localStorage.getItem("bot-color"))
    //let fetchPlayersName = JSON.parse(localStorage.getItem("spelaren index namn från localstorage sätts här"))
    //playerName.innerText = "fetchPlayersName"
    
    if(fetchLSBotColor === 1){
        theGameBotColor.style.color = "green";
        botName.innerText = "Lätt"
    }    
    else if(fetchLSBotColor === 2){
        theGameBotColor.style.color = "blue";
        botName.innerText = "Medium"
    }    
    else if(fetchLSBotColor === 3){
        theGameBotColor.style.color = "red";
        botName.innerText = "Svår"
    }
}

/**
 * Function that counts down to zero then it goes over to the bot or back to the player
 */
function countdown() {
    const timeLeftText = timeLeftP.innerText = "Tid kvar: "
    setInterval(()=> {
        const countDown = count--
        timeLeftP.innerText = timeLeftText + countDown

        if(countDown === 0) {            
            alert('Du hann inte!')
        }
    }, 1000)
}

