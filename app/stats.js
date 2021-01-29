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