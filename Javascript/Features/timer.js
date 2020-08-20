
var upHour = document.getElementById("upHour");
var upMinute = document.getElementById("upMinute");
var upSecond = document.getElementById("upSecond");
var downHour = document.getElementById("downHour");
var downMinute = document.getElementById("downMinute");
var downSecond = document.getElementById("downSecond");
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
var countDown = "false";
var timerTicking = 0;

alertSound = document.getElementById("alertSound")

start.addEventListener("click", function() {
  if (startValue == "Start" || startValue == "Resume") {
    countDown = "true";
    check();
    start.innerHTML = "Pause";
    startValue = "Pause";
    timerTicking = setInterval(timePassing, 1000)
  } else if (startValue == "Pause") {
    countDown = "false";
    check()
    start.innerHTML = "Resume";
    startValue = "Resume";
    clearInterval(timerTicking);
  };
})

reset.addEventListener("click", function() {
  countDown = "false";
  check()
  start.innerHTML = "Start";
  startValue = "Start";
  clearInterval(timerTicking);
  secondNumTotal = 0;
  update();
});

upHour.addEventListener("click", function() {
  if (hourNum == 23) {
    subtractSecond(82800);
    update();
  } else {
    addSecond(3600);
    update();
  };
});

downHour.addEventListener("click", function() {
  if (hourNum == "00") {
    addSecond(82800);
    update();
  } else {
    subtractSecond(3600);
    update();
  };
});

upMinute.addEventListener("click", function() {
  if (minuteNum == 59) {
    subtractSecond(3540);
    update();
  } else {
    addSecond(60);
    update() ;
  };
});

downMinute.addEventListener("click", function() {
  if (minuteNum == "00") {
    addSecond(3540);
    update();
  } else {
    subtractSecond(60);
    update();
  };
});

upSecond.addEventListener("click", function() {
  if (secondNum == 59) {
    subtractSecond(59);
    update();
  } else {
    addSecond(1);
    update();
  };
});

downSecond.addEventListener("click", function() {
  if (secondNum == "00") {
    addSecond(59);
    update();
  } else {
    subtractSecond(1);
    update();
  };
});

function addSecond(seconds) {
  secondNumTotal += seconds
};

function subtractSecond(seconds) {
  secondNumTotal -= seconds;;
};

function timePassing() {
  if (secondNumTotal == 0) {
    countDown = "false";
    check()
    start.innerHTML = "Start";
    startValue = "Start";
    clearInterval(timerTicking);
    console.log(secondNumTotal);
    alertSound.play();
    alert("Timer is finished!");
  } else {
    subtractSecond(1);
    update();
  }
};

function check() {
  if (countDown == "false") {
    upHour.style.visibility = "";
    upMinute.style.visibility = "";
    upSecond.style.visibility = "";
    downHour.style.visibility = "";
    downMinute.style.visibility = "";
    downSecond.style.visibility = "";
  } else {
    upHour.style.visibility = "hidden";
    upMinute.style.visibility = "hidden";
    upSecond.style.visibility = "hidden";
    downHour.style.visibility = "hidden";
    downMinute.style.visibility = "hidden";
    downSecond.style.visibility = "hidden";
  }
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