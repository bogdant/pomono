let workDuration = 25 * 60;
let breakDuration = 5 * 60;
let currentTime = workDuration;
let timerInterval;
let isWorkTime = true;

const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const phaseEl = document.getElementById('phase');

function updateTimer() {
  let minutes = Math.floor(currentTime / 60);
  let seconds = currentTime % 60;
  timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function countdown() {
  if (currentTime > 0) {
    currentTime--;
    updateTimer();
  } else {
    clearInterval(timerInterval);
    isWorkTime = !isWorkTime;
    currentTime = isWorkTime ? workDuration : breakDuration;
    phaseEl.textContent = isWorkTime ? "Work Time!" : "Break Time!";
    timerInterval = setInterval(countdown, 1000);
  }
}

startBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  timerInterval = setInterval(countdown, 1000);
});

pauseBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
});

resetBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  isWorkTime = true;
  currentTime = workDuration;
  phaseEl.textContent = "Work Time!";
  updateTimer();
});

updateTimer();
