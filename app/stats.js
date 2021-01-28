
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
