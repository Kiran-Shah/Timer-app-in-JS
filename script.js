const startPauseBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");
const hourInp = document.getElementById("hour");
const minuteInp = document.getElementById("minute");
const secondInp = document.getElementById("second");

let interval;


const resetTimer = () => {
    hourInp.value = "";
    minuteInp.value = "";
    secondInp.value = "";
    clearInterval(interval);
    startPauseBtn.innerText = "Start";
    startPauseBtn.style.background = "green";
}

const startTimer = () => {
    startPauseBtn.innerText = "Pause";
    startPauseBtn.style.background = "orange";


    let seconds = secondInp.value == "" ? 0 : secondInp.value;
    let minutes = minuteInp.value == "" ? 0 : minuteInp.value;
    let hours = hourInp.value == "" ? 0 : hourInp.value;

    if (seconds > 60) {
        minutes = parseInt(minutes) + parseInt(seconds / 60);
        seconds = parseInt(seconds % 60);
    }

    if (minutes > 60) {
        hours = parseInt(hours) + parseInt(minutes / 60);
        minutes = parseInt(minutes % 60);
    }

    hourInp.value = hours;
    minuteInp.value = minutes;
    secondInp.value = seconds;


    interval = setInterval(() => {
        if (seconds == 0 && minutes == 0 && hours == 0) {
            resetTimer();
            return;
        }

        if (seconds == 0) {
            if (minutes == 0 && hours > 0) {
                minutes = 59;
                hours--;
            } else {
                minutes--;
            }
            seconds = 59;
        } else {
            seconds--;
        }



        hourInp.value = hours;
        minuteInp.value = minutes;
        secondInp.value = seconds;
    }, 1000);
}

const pauseTimer = () => {
    clearInterval(interval);
    startPauseBtn.innerText = "Continue";
    startPauseBtn.style.background = "green";
}

startPauseBtn.addEventListener("click", () => {
    if (startPauseBtn.innerText === "Start" || startPauseBtn.innerText === "Continue") startTimer();
    else if (startPauseBtn.innerText === "Pause") pauseTimer();
});

resetBtn.addEventListener("click", () => resetTimer());