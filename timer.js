const time = document.querySelector('.time')
const info = document.querySelector('.info-box')
const help = document.querySelector('.help-box')
const focusBtn = document.querySelector('.focus')
const breakBtn = document.querySelector('.break')
const setTimeBox = document.querySelector('.set-time-box')
const confirmBtn = document.querySelector('.confirm-btn')
const resetBtn = document.querySelector('.reset')
const exitBtn = document.querySelector('.exit-btn')

let studyTime = document.querySelector('.set-study-time')
let breakTime = document.querySelector('.set-break-time')

let isBreak
let countdown

exitBtn.addEventListener('click', () => {
    setTimeBox.classList.remove('active');
})

resetBtn.addEventListener('click', () => {
    location.reload()
})

focusBtn.addEventListener('click', popUp)

function popUp() {

    // open popup for setting timer
    setTimeBox.classList.toggle('active')

    // user set the timer and clicked confirm
    confirmBtn.addEventListener('click', () => {

        // close popup
        setTimeBox.classList.remove('active')

        // starting timer
        startTimer(parseInt(studyTime.value), 0, false)
    })
}

function startTimer(minutes, seconds, breakMode) {

    clearInterval(countdown)
    
    isBreak = breakMode 

    if(isBreak === true) {
        minutes = parseInt(breakTime.value)
    }

    // if user click break while studying..
    breakBtn.addEventListener('click', () => {
        clearInterval(countdown)
        startTimer(parseInt(breakTime.value), 0, true)
    })

    function updateTime() {

        if(!isBreak) {

            info.textContent = 'I hope your study is going well..'
            breakBtn.classList.remove('disable')
            focusBtn.classList.add('disable')
            focusBtn.removeEventListener('click', popUp)
        }  else {

            info.textContent = 'Make sure you get enough rest and study harder than before!'
            breakBtn.classList.add('disable')
            focusBtn.classList.remove('disable')
            focusBtn.addEventListener('click', popUp)
        }

        // 00:00 format
        let displayMinutes = minutes.toString().padStart(2, "0")
        let displaySeconds = seconds.toString().padStart(2, "0")

        // displaying time
        time.textContent = `${displayMinutes}:${displaySeconds}`

        // counting time
        if(minutes === 0 && seconds === 0) {

            clearInterval(countdown)
            time.textContent = '00:00'

            setTimeout(() => {
                isBreak = !isBreak // changing mode
                startTimer(minutes, 0, isBreak)
            }, 500)
        } else {

            if(seconds === 0) {
                minutes--
                seconds = 59
            } else {
                seconds--
            }
        }
    }

    updateTime() // show timer without delay after clicked confirm or break
    countdown = setInterval(updateTime, 1000)    
}