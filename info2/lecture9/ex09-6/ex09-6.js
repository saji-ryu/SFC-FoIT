var targetString = "";
var counter = 0;
var displayStr = "";
var timer = null;

function setStr() {
  if (targetString.length <= counter) {
    clearTimer();
  }
  displayStr += targetString.charAt(counter);
  document.getElementById("targetArea").innerHTML = displayStr;
  counter++;
}

function startCount() {
  clearTimer();
  counter = 0;
  document.getElementById("targetArea").innerHTML = "";
  displayStr = "";
  targetString = document.getElementById("targetStr").value;
  timer = setInterval(setStr, 1000);
}

function clearTimer() {
  clearInterval(timer);
  timer = null;
}
