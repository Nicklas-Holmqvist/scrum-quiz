
const activeBot = document.querySelectorAll('.bot');
const theGameBotColor = document.querySelector('.figure-2');


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

//rule box javascript
let ruleBox = document.getElementById("ruleContBox"); //the whole rule box

let ruleButton = document.getElementById("rule-btn") //button that opens the rule box

let span = document.getElementsByClassName("close")[0]; //gets the <span> element (button) which closes the rule box  
     

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
