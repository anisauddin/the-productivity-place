
var hour = document.getElementById("time1");
var minute = document.getElementById("time3");
var second = document.getElementById("time5");
var secondNumTotal = 0;
var hourNum = 0;
var minuteNum = 0;
var secondNum = 0;
var start = document.getElementById("start");
var startValue = "Start";
var reset = document.getElementById("reset");
var timerTicking = 0;

start.addEventListener("click", function() {
  if (startValue == "Start" || startValue == "Resume") {
    start.innerHTML = "Pause";
    startValue = "Pause";
    timerTicking = setInterval(timePassing, 1000)
  } else if (startValue == "Pause") {
    start.innerHTML = "Resume";
    startValue = "Resume";
    clearInterval(timerTicking);
  };
})

reset.addEventListener("click", function() {
  start.innerHTML = "Start";
  startValue = "Start";
  clearInterval(timerTicking);
  secondNumTotal = 0;
  update();
});

function addSecond(seconds) {
  secondNumTotal += seconds
};

function timePassing() {
  addSecond(1);
  update();
};

function update() {
  console.log(secondNumTotal);
  secondNum = secondNumTotal;
  minuteNum = parseInt(secondNum)/60;
  hourNum = Math.floor(minuteNum/60);

  if (hourNum >= 1) {
    secondNum = parseInt(secondNum) - (hourNum*3600);
    minuteNum = Math.floor(secondNum/60);
    if (minuteNum >= 1) {
      secondNum = parseInt(secondNum - (minuteNum*60));
    };
    display();
  } else {
    hourNum = 0;
    minuteNum = Math.floor(secondNum/60);
    if (minuteNum >= 1) {
      secondNum = parseInt(secondNum - (minuteNum*60));
      display();
    } else {
      minuteNum = 0;
      display();
    };
  };
};

function display() {
  console.log(hourNum + " hour(s), " + minuteNum + " minute(s), " + secondNum + " second(s).");
  if (hourNum < 10) {
    hour.innerHTML = "0" + hourNum;
  } else {
    hour.innerHTML = hourNum;
  };

  if (minuteNum < 10) {
    minute.innerHTML = "0" + minuteNum;
  } else {
    minute.innerHTML = minuteNum;
  };

  if (secondNum < 10) {
    second.innerHTML = "0" + secondNum;
  } else {
    second.innerHTML = secondNum;
  };
};