/*
 * DOTS: Level Two
 *
 */


let allBalls = document.querySelectorAll(".js-ball")

score = 0

const elements = allBalls;
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(`click`, function() {
    let scoreDisplay = document.querySelector(".js-score")
    let winnerWinner = document.querySelector(".level-winner")
    if (score > 89) {
        winnerWinner.style.opacity = 100
        scoreDisplay.innerText = 100
    } else {
    score = score + 10
    console.log(score)
    scoreDisplay.innerText = score}
    })
}