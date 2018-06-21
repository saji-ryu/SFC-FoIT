var timer = null;
var counter = 0;
var place = "";
var point = 0;

function start() {
  timer = setInterval(pushMole, 1000);
  point = 0;
  $("#point").html(point);
}

function stop() {
  counter = 0;
  clearInterval(timer);
  timer = null;
  $("td").html("");
  $("#box4").html("end");
}

$("td").click(function() {
  if (this.id == place) {
    point++;
    $("#point").html(point);
  }
});

function pushMole() {
  place = "box" + Math.floor(Math.random() * 9);
  $("td").html("");
  $("#" + place).append("○");
  if (counter < 10) {
    counter++;
  } else {
    stop();
  }
}
