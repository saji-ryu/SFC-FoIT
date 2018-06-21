$(function() {
  $("#through").click(function() {
    if (this.style.textDecoration != "line-through") {
      $("#through").css("text-decoration", "line-through");
    } else {
      $("#through").css("text-decoration", "none");
    }
  });
});
