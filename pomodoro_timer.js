let timerDisplay = document.getElementById("timer");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let shortBreakBtn = document.getElementById("short-break");
let longBreakBtn = document.getElementById("long-break");

let timeLeft = 1500; // 5 minutes in seconds
let timer;
let running = false;

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                running = false;
                alert("Time's up!");
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    clearInterval(timer);
    running = false;
    timeLeft = 1500;
    updateDisplay();
}

function shortBreak() {
    resetTimer();
    timeLeft = 300; // 5-minute break
    updateDisplay();
}

function longBreak() {
    resetTimer();
    timeLeft = 900; // 15-minute break
    updateDisplay();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
shortBreakBtn.addEventListener("click", shortBreak);
longBreakBtn.addEventListener("click", longBreak);

updateDisplay();