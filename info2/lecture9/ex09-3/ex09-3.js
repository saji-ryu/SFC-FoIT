var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "black";

function light_print(event) {
  ctx.clearRect(0, 0, 500, 500);
  ctx.fillRect(25, 225, event.value, 50);
}

window.addEventListener("devicelight", light_print);
