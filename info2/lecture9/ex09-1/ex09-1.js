function classTitle(_day, _period) {
  var classes = {
    Monday: { 4: "複雑系の科学", 5: "研究会", 6: "研究会" },
    Tuesday: { 2: "音楽と脳", 4: "大規模データシステム論", 5: "SA" },
    Thursday: { 1: "SA", 2: "SA", 3: "IDP", 4: "IDP" }
  };
  return classes[_day][_period] || "授業は履修していません";
}

function getClassTitle() {
  var day = document.getElementById("Day").value;
  var period = document.getElementById("Period").value;
  alert(classTitle(day, period));
}
