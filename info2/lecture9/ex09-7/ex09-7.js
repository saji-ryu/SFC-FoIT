var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var counter = 0;
var lux = 0;
var luxes = new Array();

ctx.fillStyle = "black";

function lightSet(event) {
  lux = event.value;
}

function drawGraph() {
  luxes.unshift(lux);
  ctx.clearRect(0, 0, 1000, 1000);
  for (let i = 0; i < counter + 1; i++) {
    ctx.fillRect(1000 - i * 15, 800, 15, -luxes[i]);
  }
  counter++;
}

setInterval(drawGraph, 1000);
window.addEventListener("devicelight", lightSet);
