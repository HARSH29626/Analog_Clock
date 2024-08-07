let secondHand = document.getElementById('second-hand');
let minuteHand = document.getElementById('minute-hand');
let hourHand = document.getElementById('hour-hand');

function clockTick() {
    let now = new Date();
    let seconds = now.getSeconds() / 60;
    let minutes = (seconds + now.getMinutes()) / 60;
    let hours = (minutes + now.getHours()) / 12;

    rotateClockHand(secondHand, seconds);
    rotateClockHand(minuteHand, minutes);
    rotateClockHand(hourHand, hours);
}

function rotateClockHand(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360);
}

setInterval(clockTick, 1000);