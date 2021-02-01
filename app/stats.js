
function getBotStats() {
    
    let fetchLSBotColor = JSON.parse(localStorage.getItem("bot"))

    document.querySelector("#easyWins").innerHTML = `Vunna matsscher: ${fetchLSBotColor.easyBot.wins}`
    document.querySelector("#easyGames").innerHTML = `Spelade matcher: ${fetchLSBotColor.easyBot.games}`
    
    document.querySelector("#mediWins").innerHTML = `Vunna matcher: ${fetchLSBotColor.mediBot.wins}`
    document.querySelector("#mediGames").innerHTML = `Spelade matcher: ${fetchLSBotColor.mediBot.games}`
    
    document.querySelector("#hardWins").innerHTML = `Vunna matcher: ${fetchLSBotColor.hardBot.wins}`
    document.querySelector("#hardGames").innerHTML = "something matcher:" + fetchLSBotColor.hardBot.games
    
}
document.addEventListener('readystatechange', event => { 

    // When HTML/DOM elements are ready:
    if (event.target.readyState === "interactive") {   //does same as:  ..addEventListener("DOMContentLoaded"..
        getBotStats()
    }

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        
    }
});
window.addEventListener('load', main)

function main() {
    showHighscorePlayers();
}

/**
 * Function that displays highscore top 3
 */

function showHighscorePlayers() {
    let highscore = JSON.parse(localStorage.getItem("highscore"))
    if (highscore !== null || undefined) {
        document.querySelector('#top1').innerHTML = highscore[0].name + ", " + highscore[0].wins + " vunna spel, " + highscore[0].games + " spelade spel";
        if (highscore[1].name !== "ingenspelare") {
            document.querySelector('#top2').innerHTML = highscore[1].name + ", " + highscore[1].wins + " vunna spel, " + highscore[1].games + " spelade spel";
        }
        if (highscore[2].name !== "ingenspelare") {
        document.querySelector('#top3').innerHTML = highscore[2].name + ", " + highscore[2].wins + " vunna spel, " + highscore[2].games + " spelade spel";
        }
    }
}
