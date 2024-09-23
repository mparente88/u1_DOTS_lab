/*
 * DOTS: Level One
 *
 */

const ball = document.querySelector(".js-ball")



const levelWinner = document.querySelector("level-winner")


let score = 0

ball.addEventListener('click', () =>{
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

