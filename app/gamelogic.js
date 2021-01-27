window.addEventListener('load', main)

function main() {
    addEventListeners()
}

function addEventListeners() {
    prepareTheGame()
    countdown()
}
// Globala variabler för spelaren

let playerName = localStorage.getItem("player-name")
let playerWins = parseInt(localStorage.getItem("player-wins"))
let playerGames = parseInt(localStorage.getItem("player-games"))
let playerGuesses = 0;

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
    const randomNr = Math.floor(Math.random() * 20 + 1);

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
    const playerNameField = document.querySelector('.player-name')
    let fetchLSBotColor = JSON.parse(localStorage.getItem("bot-color"))
    playerNameField.innerText = playerName

    if (fetchLSBotColor === 1) {
        theGameBotColor.style.color = "green";
        botName.innerText = "Lätt"
    }
    else if (fetchLSBotColor === 2) {
        theGameBotColor.style.color = "blue";
        botName.innerText = "Medium"
    }
    else if (fetchLSBotColor === 3) {
        theGameBotColor.style.color = "red";
        botName.innerText = "Svår"
    }
}

/**
 * Function that counts down to zero then it goes over to the bot or back to the player
 */
function countdown() {
    const timeLeftText = timeLeftP.innerText = "Tid kvar: "
    setInterval(() => {
        const countDown = count--
        timeLeftP.innerText = timeLeftText + countDown

        if (countDown === 0) {
            count = 10
            // alert('Du hann inte!') !!!!!!!!!!!!!!!!!!
        }
    }, 1000)
}


////////////// STANDARDBOT LOGIK /////////


////// Globala variabler //////////////
const questionNum = randomNumber();
const answer = document.querySelector('.answer').textContent = " "
let activePlayer = 0;
document.querySelector(`.player--${activePlayer}`).classList.add('activeLight')

///// Jämför spelarens input med ett random tal mellan 1-20  /////
document.querySelector('#confirm').addEventListener('click', () => {
    let input = Number(document.querySelector('#number').value);
    let clearInput = document.querySelector('#number');
    
    // console.log(questionNum)
    if (!input || input > 20) {
        document.querySelector('.answer').textContent = "Invalid nummer"
        clearInput.value = '';
    } else if (input === questionNum) {
        document.querySelector('.answer').textContent = "Rätt nummer"
        playerGuesses ++;
        playerWins ++;
        playerGames ++;
        updatePlayerInfoInLS()
        console.log("Vunna spel: " + playerWins)
        clearInput.value = '';

        setTimeout(()=>{           
            const endingPage = "./endscreen.html"
            window.open(endingPage, "_self")
        },1000)

    } else if (input !== questionNum) {
        document.querySelector('.answer').textContent = input < questionNum ? "För lågt nummer" : "För högt "
        clearInput.value = '';
        document.querySelector('#player-bubble').textContent = `${input}`
        playerGuesses ++;
        switchPlayer()
    } else document.querySelector('.answer').textContent = "GAME OVER"
})

////// Skapar ett random nummer mellan 1-20 och jämför med talet mellan 1-20 //////
const BotCompairNum = function () {
    if (activePlayer === 1) {
        let botNum = Math.trunc(Math.random() * 20) + 1;
        if (questionNum === botNum) {
            document.querySelector('.answer').textContent = "Bot gissa rätt nummer"
            playerGames ++;
            updatePlayerInfoInLS()


            setTimeout(()=>{           
                const endingPage = "./endscreen.html"
                window.open(endingPage, "_self")
            },1000)

        } else if (questionNum !== botNum) {
            document.querySelector('.answer').textContent = botNum > questionNum ? "För högt nummer" : "För lågt nummer"
            document.querySelector('#bot-bubble').textContent = ` ${botNum}`
            switchPlayer()
        } else console.log("gameOver")
    }
}

///// tar bort och lägger till activeLight klassen samt kör BotcompairNum funktionen /////
const switchPlayer = function () {
    document.querySelector(`.player--${activePlayer}`).classList.remove('activeLight')
    activePlayer = activePlayer === 0 ? 1 : 0
    document.querySelector(`.player--${activePlayer}`).classList.add('activeLight')
    count = 10;
    setTimeout(() => {
        BotCompairNum()
    }, 1000 * (Math.random() * 2 + 4));

}
////////////// bot1 vinner aldgig om den får rätt siffra kör en if så att den får fel
///////////// Bot2 mellan 1-20 standard
//////////// Bot3 beräknar span mellan senaste svaret och högre eller lägre  

                       ////////////
                //////////////////////////
//////////////// STANDARDBOT LOGIC SLUT ////////////////////
               //////////////////////////
                    /////////////


function updatePlayerInfoInLS() {
    localStorage.setItem("player-wins", playerWins)
    localStorage.setItem("player-games", playerGames)
    localStorage.setItem("player-guesses", playerGuesses)
}
