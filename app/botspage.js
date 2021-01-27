const activeBot = document.querySelectorAll('.bot');

let botColor;

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
