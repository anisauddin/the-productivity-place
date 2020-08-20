
var back = document.getElementById('backButton');
var home = document.getElementById('home');
var explore = document.getElementById('explore');
var time = document.getElementById('time');
var note = document.getElementById('note');
var quote = document.getElementById('quote');
var music = document.getElementById('music');

var clickedHome = "false";
var clickedExplore = "false";
var clickedTime = "false";
var clickedNote = "false";
var clickedQuote = "false";
var clickedMusic = "false";

back.addEventListener("click", function(){
  window.history.back();
});

home.addEventListener("click", function(){
  if (clickedHome == "true") {
    window.location.assign("/../HTML/Other/Main/main.html")
  } else {
    clear()
    home.innerHTML = "Go to The Productivity Place's homepage.";
    clickedHome = "true";
  }
});

explore.addEventListener("click", function(){
  if (clickedExplore == "true") {
    window.location.assign("/../HTML/Other/Navigation/explore.html")
  } else {
    clear()
    explore.innerHTML = "Navigate through the site's main pages.";
    clickedExplore = "true";
  }
});

time.addEventListener("click", function(){
  if (clickedTime == "true") {
    window.location.assign("/../HTML/Features/Time/time.html")
  } else {
    clear()
    time.innerHTML = "Set countdowns and measure/watch the time.";
    clickedTime = "true";
  }
});

note.addEventListener("click", function(){
  if (clickedNote == "true") {
    window.location.assign("/../HTML/Features/note.html")
  } else {
    clear()
    note.innerHTML = "Take notes and save them for future reference.";
    clickedNote = "true";
  }
});

quote.addEventListener("click", function(){
  if (clickedQuote == "true") {
    window.location.assign("/../HTML/Features/quote.html")
  } else {
    clear()
    quote.innerHTML = "Read the words of the wise.";
    clickedQuote = "true";
  }
});

music.addEventListener("click", function(){
  if (clickedMusic == "true") {
    window.location.assign("/../HTML/Features/music.html")
  } else {
    clear()
    music.innerHTML = "Chill out with some awesome tunes.";
    clickedMusic = "true";
  }
});

document.addEventListener("click", function(){
  if (home.contains(event.target) || explore.contains(event.target) || time.contains(event.target) || note.contains(event.target) || quote.contains(event.target) || music.contains(event.target)) {

  } else {
    clear()
  }
})

function clear() {
  clickedHome = "false";
  clickedExplore = "false";
  clickedTime = "false";
  clickedNote = "false";
  clickedQuote = "false";
  clickedMusic = "false";

  home.innerHTML = "Home";
  explore.innerHTML = "Explore";
  time.innerHTML = "Timer, Stopwatch, Clock";
  note.innerHTML = "Notepad";
  quote.innerHTML = "Quote Generator";
  music.innerHTML = "Work Playlists";
};