

const activeBot = document.querySelectorAll('.bot');
const cofirmBtn = document.querySelector(".confirm-bot")
//let botColor;

let bot = {
    botColor: 0,
    
    easyBot : {
        wins: 0,
        games: 0
    },

    mediBot : {
        wins: 0,
        games: 0
    },

    hardBot : {
        wins: 0,
        games: 0
    }

}

/**
 * Function that sets focus on active bot on page Choose difficulty
 */
activeBot.forEach((e) => {

    e.addEventListener('click', () => {
        if (e.classList.contains('bot-active')) {
            e.classList.remove('bot-active')
            cofirmBtn.classList.remove('confirm-bot-active')
        }
        else if (!e.classList.contains('bot-active')) {
            activeBot.forEach((i) => {
                i.classList.remove('bot-active')
                cofirmBtn.classList.remove('confirm-bot-active')
            })
            e.classList.add('bot-active')
            cofirmBtn.classList.add('confirm-bot-active')

            if (e.classList.contains('figure-green')) {                
                bot.botColor = 1
                localStorage.setItem("bot", JSON.stringify(bot))
            }

            else if (e.classList.contains('figure-blue')) {
                bot.botColor = 2
                localStorage.setItem("bot",  JSON.stringify(bot))
            }

            else if (e.classList.contains('figure-red')) {
                bot.botColor = 3
                localStorage.setItem("bot",  JSON.stringify(bot))
            }
        }
    })
})  