var timer = null;

function stopTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

function startTimer() {
  timer = setInterval(emmitAlert, 10000);
}

function emmitAlert() {
  alert("timeout!");
}
