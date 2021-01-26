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
////boten skapa ett randomnr som gämförs med spelets randomnr///////////
const questionNum = Math.trunc(Math.random() * 20) + 1;
const answer = document.querySelector('.answer').textContent;
let activePlayer = 0;
document.querySelector('#confirm').addEventListener('click', () => {
    let input = Number(document.querySelector('#number').value);
    if (!input) {
        console.log('invalid number')
    } else if (input === questionNum) {
        document.querySelector('.answer').textContent = "Rätt nummer"
    } else if (input !== questionNum) {
        document.querySelector('.answer').textContent = input < questionNum ? "För lågt nummer" : "För högt "
        activePlayer++
    } else document.querySelector('.answer').textContent = "GAME OVER"

})
if (activePlayer === 1) {
    ////BotCompairNum()///////
}

const BotCompairNum = function (randomNum) {
    let botNum = Math.trunc(Math.random() * 20) + 1;
    if (randomNum === botNum) {
        console.log("Rätt Nummer")

    } else if (randomNum !== botNum) {
        document.querySelector('.answer').textContent = botNum > randomNum ? "För högt nummer" : "För lågt nummer"
        activePlayer--
    } else console.log("gameOver")
}



