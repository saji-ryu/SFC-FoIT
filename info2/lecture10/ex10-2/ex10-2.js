function changeCCC() {
  reset();
  var color = document.getElementById("color").value;
  $(".ccc").css("background-color", color);
}

function changeAAABBB() {
  reset();
  var color = document.getElementById("color").value;
  $(".aaa,.bbb").css("background-color", color);
}

function reset() {
  $("p").css("background-color", "");
}
