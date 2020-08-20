
var date = document.getElementById("date");
var time = document.getElementById("time");
var timezone = document.getElementById("timezone");

var updateInfo = setInterval(getInfo, 100);

function getInfo() {
  var info = new Date();
  date.innerHTML = "Date: " + info.toDateString();
  time.innerHTML = "Time: " + info.toLocaleTimeString();
  timezone.innerHTML = "Timezone: " + info.toTimeString().substr(9)
};