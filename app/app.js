const setLink = document.querySelectorAll('.setlink');
const theGameBotColor = document.querySelector('.figure-2');

/**
 * Function that sets focus on active bot on page Choose difficulty
 */
setLink.forEach((e) => {

    e.addEventListener('click', () => {
        if (e.classList.contains('bot-active')) {
            e.classList.remove('bot-active')
        }
        else if (!e.classList.contains('bot-active')) {
            setLink.forEach((i) => {
                i.classList.remove('bot-active')
            })
            e.classList.add('bot-active')

            if (e.classList.contains('figure-green')) {
                // Lägg till klassen på spelsidan för att göra så boten får rätt färg
            }

            else if (e.classList.contains('figure-blue')) {
                // Lägg till klassen på spelsidan för att göra så boten får rätt färg
            }

            else if (e.classList.contains('figure-red')) {
                // Lägg till klassen på spelsidan för att göra så boten får rätt färg
            }
        }
    })
})

///////////////////////////////////////////
////////////// STANDARDBOT LOGIK /////////
/////////////////////////////////////////

////// Globala variabler //////////////
const questionNum = Math.trunc(Math.random() * 20) + 1;
const answer = document.querySelector('.answer').textContent = " "
let activePlayer = 0;
document.querySelector(`.player--${activePlayer}`).classList.add('activeLight')

///// Jämför input med random tal //
document.querySelector('#confirm').addEventListener('click', () => {
    let input = Number(document.querySelector('#number').value);
    console.log(questionNum)
    if (!input || input > 20) {
        document.querySelector('.answer').textContent = "Invalid nummer"
    } else if (input === questionNum) {
        document.querySelector('.answer').textContent = "Rätt nummer"
    } else if (input !== questionNum) {
        document.querySelector('.answer').textContent = input < questionNum ? "För lågt nummer" : "För högt "
        switchPlayer()
    } else document.querySelector('.answer').textContent = "GAME OVER"
})





//////Jämför Bot med randomnummer////
const BotCompairNum = function () {
    if (activePlayer === 1) {
        let botNum = Math.trunc(Math.random() * 20) + 1;
        if (questionNum === botNum) {
            document.querySelector('.answer').textContent = "Bot gissa rätt nummer"

        } else if (questionNum !== botNum) {
            document.querySelector('.answer').textContent = botNum > questionNum ? "För högt nummer" : "För lågt nummer"
            document.querySelector('.show-latest-answer').textContent = `Bot guess ${botNum}` //console.log(`bot guess ${botNum}`)
            switchPlayer()
        } else console.log("gameOver")
    }
}


const switchPlayer = function () {
    document.querySelector(`.player--${activePlayer}`).classList.remove('activeLight')
    activePlayer = activePlayer === 0 ? 1 : 0
    document.querySelector(`.player--${activePlayer}`).classList.add('activeLight')
    setTimeout(() => {
        BotCompairNum()
    }, 1000 * (Math.random() * 2 + 4));

}
const botGuess = function () {
    return Math.trunc(Math.random() * 20) + 1;
}

////////////// bot1 vinner aldgig om den får rätt siffra kör en if så att den får fel
///////////// Bot2 mellan 1-20 standard
//////////// Bot3 beräknar span mellan senaste svaret och högre eller lägre 
                       ////////////
                //////////////////////////
//////////////// STANDARDBOT LOGIC SLUT ////////////////////
               //////////////////////////
                    /////////////