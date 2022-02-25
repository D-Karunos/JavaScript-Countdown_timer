function myFunction() {
    const x = document.getElementById("myAudio").autoplay;
    document.getElementById("demo").innerHTML = x;
  }

const timeTo = '25 Dec 2022'

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countdown() {
    const christmasDate = new Date(timeTo);
    const currentDate = new Date();

    const diff = (christmasDate-currentDate) / 1000; // Get time in seconds

    const days = Math.floor(diff / 3600 /24);
    const hours = Math.floor(diff /3600) %24;
    const minutes = Math.floor(diff / 60) % 60;
    const seconds = Math.floor(diff) % 60;

    daysEl.innerHTML = formatTime (days);
    hoursEl.innerHTML = formatTime (hours) ;
    minutesEl.innerHTML = formatTime (minutes);
    secondsEl.innerHTML = formatTime (seconds);
}

function formatTime(time) {
    return (time < 10 ? '0' : '') + time;
}

countdown();

setInterval(countdown, 1000);

