let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let laps = [];

const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const display = document.getElementById("display");
const lapsContainer = document.getElementById("laps");

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function updateDisplay() {
    display.textContent = formatTime(seconds);
}

function startStopwatch() {
    isRunning = true;
    startStopButton.textContent = "Pause";
    timer = setInterval(() => {
        seconds++;
        updateDisplay();
    }, 1000);
}

function pauseStopwatch() {
    isRunning = false;
    clearInterval(timer);
    startStopButton.textContent = "Start";
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    updateDisplay();
    startStopButton.textContent = "Start";
}

function addLap() {
    if (isRunning) {
        laps.push(formatTime(seconds));
        const lapItem = document.createElement("div");
        lapItem.textContent = `Lap ${laps.length}: ${formatTime(seconds)}`;
        lapsContainer.appendChild(lapItem);
    }
}

startStopButton.addEventListener("click", () => {
    if (isRunning) {
        pauseStopwatch();
    } else {
        startStopwatch();
    }
});

resetButton.addEventListener("click", resetStopwatch);
lapButton.addEventListener("click", addLap);
