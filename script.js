setInterval(setAnalogClock,1000)
setInterval(setDigitalClock,1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const digitalTime = document.querySelector('[data-digital-time]')
const am = document.querySelector('[data-AM]')
const pm = document.querySelector('[data-PM]')

function setAnalogClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (currentDate.getMinutes() + secondsRatio) / 60
    const hoursRatio = (currentDate.getHours() + minutesRatio) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

function setDigitalClock() {
    const currentDate = new Date()
    const seconds = currentDate.getSeconds()
    const minutes = currentDate.getMinutes()
    const hours = currentDate.getHours() - 12
    
    const newTime = hours + ":" + minutes + ":" + seconds
    digitalTime.textContent = newTime
    setMidday()
}

function setMidday() {
    const hours = new Date().getHours()

    // PM
    if (hours > 12) {
        am.style.setProperty('--color', 'rgb(128,128,128)')
        pm.style.setProperty('--color', 'rgb(255,0,0)')
    } else {
        pm.style.setProperty('--color', 'rgb(128,128,128)')
        am.style.setProperty('--color', 'rgb(255,0,0)')
    }

}

setMidday()
setDigitalClock()
setAnalogClock()