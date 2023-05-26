const squares = document.querySelectorAll('.square')
const fly = document.querySelector('.fly')
// timer //
const timeLeft = document.querySelector('#time-left')
// score //
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

// blank, clean game upon page refresh //
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('fly')
    })

    
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    console.log(randomSquare)
    randomSquare.classList.add('fly')

    hitPosition = randomSquare.id

}

squares.forEach(square => {
 square.addEventListener('mousedown', () => {
     if (square.id == hitPosition) {
         result++
         score.textContent = result
         hitPosition = null
     }
 })
})

function moveFly() {
    let timerId = null
    timerId = setInterval(randomSquare, 500)
}

moveFly()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        alert('GAME OVER! Your final score is ' + result)
        clearInterval(timerId)
    }

}

let countDownTimerId = setInterval(countDown, 1000)


randomSquare()