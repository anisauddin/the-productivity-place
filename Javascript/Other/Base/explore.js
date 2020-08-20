
var back = document.getElementById('backButton');
var home = document.getElementById('home');
var features = document.getElementById('features');
var dashboard = document.getElementById('dashboard');
var creator = document.getElementById('creator');
var site = document.getElementById('site');
var mentors = document.getElementById('mentors');

var clickedHome = "false";
var clickedFeatures = "false";
var clickedDashboard = "false";
var clickedCreator = "false";
var clickedSite = "false";
var clickedMentors = "false";

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

features.addEventListener("click", function(){
  if (clickedFeatures == "true") {
    window.location.assign("/../HTML/Other/Navigation/features.html")
  } else {
    clear()
    features.innerHTML = "Navigate through the site's feature pages.";
    clickedFeatures = "true";
  }
});

dashboard.addEventListener("click", function(){
  if (clickedDashboard == "true") {
    window.location.assign("/../HTML/Other/Dashboard/dashboard.html")
  } else {
    clear()
    dashboard.innerHTML = "Use multiple features on one page.";
    clickedDashboard = "true";
  }
});

creator.addEventListener("click", function(){
  if (clickedCreator == "true") {
    window.location.assign("/../HTML/Other/About/creator.html")
  } else {
    clear()
    creator.innerHTML = "Get to know the creator of this site.";
    clickedCreator = "true";
  }
});

site.addEventListener("click", function(){
  if (clickedSite == "true") {
    window.location.assign("/../HTML/Other/About/site.html")
  } else {
    clear()
    site.innerHTML = "Learn about this site.";
    clickedSite = "true";
  }
});

mentors.addEventListener("click", function(){
  if (clickedMentors == "true") {
    window.location.assign("/../HTML/Other/Mentors/mentors.html")
  } else {
    clear()
    mentors.innerHTML = "Thank you guys so much, here's a surprise for you :)";
    clickedMentors = "true";
  }
});

document.addEventListener("click", function(){
  if (home.contains(event.target) || features.contains(event.target) || dashboard.contains(event.target) || creator.contains(event.target) || site.contains(event.target) || mentors.contains(event.target)) {

  } else {
    clear()
  }
})

function clear() {
  clickedHome = "false";
  clickedFeatures = "false";
  clickedDashboard = "false";
  clickedCreator = "false";
  clickedSite = "false";
  clickedMentors = "false";

  home.innerHTML = "Home";
  features.innerHTML = "Features";
  dashboard.innerHTML = "Dashboard";
  creator.innerHTML = "About the Creator";
  site.innerHTML = "About this Site";
  mentors.innerHTML = "For Mentors";
};