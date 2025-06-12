let [minutes, seconds, milliseconds] = [0, 0, 0];
let timerRef = document.getElementById("time");
let interval = null;

function updateDisplay() {
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
  timerRef.innerHTML = `${m}:${s}:${ms}`;
}

function start() {
  if (interval !== null) return;
  interval = setInterval(() => {
    milliseconds++;
    if (milliseconds == 100) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    updateDisplay();
  }, 10);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  [minutes, seconds, milliseconds] = [0, 0, 0];
  updateDisplay();
  stop();
}
