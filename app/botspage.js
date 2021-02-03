

const activeBot = document.querySelectorAll('.bot');

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
        }
        else if (!e.classList.contains('bot-active')) {
            activeBot.forEach((i) => {
                i.classList.remove('bot-active')
            })
            e.classList.add('bot-active')

            if (e.classList.contains('figure-green')) {
                // botColor = 1;
                // easyBot.botColor = 1
                // easyBot.wins = 0
                // easyBot.games = 0 
                bot.botColor = 1
                localStorage.setItem("bot", JSON.stringify(bot))
            }

            else if (e.classList.contains('figure-blue')) {
                // botColor = 2;
                // mediBot.botColor = 2
                // mediBot.wins = 0
                // mediBot.games = 0 
                bot.botColor = 2
                localStorage.setItem("bot",  JSON.stringify(bot))
            }

            else if (e.classList.contains('figure-red')) {
                // botColor = 3;
                // hardBot.botColor = 3
                // hardBot.wins = 0
                // hardBot.games = 0 
                bot.botColor = 3
                localStorage.setItem("bot",  JSON.stringify(bot))
            }
        }
    })
})  