function getBotStats() {

    let fetchLSBotColor = JSON.parse(localStorage.getItem("bot"))

    querySelector("#easyWins").innerHTML = `Vunna matcher: ${fetchLSBotColor.easyBot.wins}`
    querySelector("#easyGames").innerHTML = `Spelade matcher: ${fetchLSBotColor.easyBot.games}`
    
    querySelector("#mediWins").innerHTML = `Vunna matcher: ${fetchLSBotColor.mediBot.wins}`
    querySelector("#mediGames").innerHTML = `Spelade matcher: ${fetchLSBotColor.mediBot.games}`
    
    querySelector("#hardWins").innerHTML = `Vunna matcher: ${fetchLSBotColor.hardBot.wins}`
    querySelector("#hardGames").innerHTML = "something matcher:" + fetchLSBotColor.hardBot.games
    
}
