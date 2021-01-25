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
        
            
        
  