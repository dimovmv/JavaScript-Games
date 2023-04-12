const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hours = 0;
let mins = 0;
let secs = 0;
let milliseconds = 0;

startBtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 75);
  }
});
pauseBtn.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
});
resetBtn.addEventListener("click", () => {
  paused = true;
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  currentTime = 0;
  hours = 0;
  mins = 0;
  secs = 0;
  milliseconds = 0;
  timeDisplay.textContent = "00:00:00:000";
});

function updateTime() {
  elapsedTime = Date.now() - startTime;

  milliseconds = Math.floor(elapsedTime % 1000);
  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hours = Math.floor((elapsedTime / (1000 * 3600)) % 60);
  
  milliseconds = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
  secs = secs < 10 ? "0" + secs : secs;
  mins = mins < 10 ? "0" + mins : mins;
  hours = hours < 10 ? "0" + hours : hours;; 
  
   timeDisplay.textContent=`${hours}:${mins}:${secs}:${milliseconds}`;

  //milliseconds = pad(milliseconds);
  //secs = pad(secs);
  //mins = pad(mins);
  //hours = pad(hours);

  //timeDisplay.textContent = `${hours}:${mins}:${secs}:${milliseconds}`;
  //function pad(unit) {
   // return ("0" + unit).length > 2 ? unit : "0" + unit;
  //}  
}
