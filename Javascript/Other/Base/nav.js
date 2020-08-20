nav = document.createElement("div");
nav.id = "nav";
document.body.insertBefore(nav, document.body.firstChild);

title = document.createElement("h2");
title.innerHTML = "The Productivity Place";
title.id = "title";
title.addEventListener("click", function(){
  window.location.assign("/../HTML/Other/Main/main.html")
});
nav.appendChild(title)

miniFlex = document.createElement("div");
miniFlex.id = "miniFlex";
nav.appendChild(miniFlex);

explore = document.createElement("h3");
explore.innerHTML = "Explore";
explore.classList.add("navButton")
explore.addEventListener("click", function(){
  window.location.assign("/../HTML/Other/Navigation/explore.html")
});
miniFlex.appendChild(explore)

features = document.createElement("h3");
features.innerHTML = "Features";
features.classList.add("navButton")
features.addEventListener("click", function(){
  window.location.assign("/../HTML/Other/Navigation/features.html")
});
miniFlex.appendChild(features)

settings = document.createElement("img")
settings.id = "settings";
settings.alt = "Settings";
settings.src = "/../Images/Base/settings.png";
// settings.addEventListener("click", function(){
//   window.location.assign("/../HTML/Other/Settings/settings.html")
// });
// I didn't have time to get to this, maybe in the future? For now..
settings.addEventListener("click", function() {
  alertSound.play();
  alert("The settings menu is currently unfinished. In the meanwhile, you can check out all our cool features :) Thanks for understanding!")
})
miniFlex.appendChild(settings);

