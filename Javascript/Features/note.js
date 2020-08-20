
all = document.getElementById("all")

titleButton = document.getElementById("titleButton");
titleButton.addEventListener("click", createTitle);

authorButton = document.getElementById("authorButton");
authorButton.addEventListener("click", createAuthor);

subtitleButton = document.getElementById("subtitleButton");
subtitleButton.addEventListener("click", createSubtitle);

paragraphButton = document.getElementById("paragraphButton");
paragraphButton.addEventListener("click", createParagraph);

listButton = document.getElementById("listButton");
listButton.addEventListener("click", createList);

alertSound = document.getElementById("alertSound")

window.onload = (start);

clear = document.getElementById("clear");
clear.addEventListener("click", function(){
  alertSound.play();
  if (confirm("Are you sure you want to clear all of your notes? This action cannot be undone.")) {
    all.innerHTML = "";
    localStorage.all = "";
    restart();
  } else {
    alertSound.play();
    alert("Action cancelled.")
  }
});

save = document.getElementById("save");
save.addEventListener("click", function(){
  localStorage.all = all.innerHTML;
  alertSound.play();
  alert("Changes saved!");
})

function restart() {
  createTitle();
  createAuthor();
}

function start() {
  all.innerHTML = localStorage.all;
  if (localStorage.all == "") {
    restart();
  };
};

function createTitle() {
  newTitle = document.createElement("section");
  newTitle.classList.add("title");
  all.appendChild(newTitle);

  titleText = document.createElement("h2");
  titleText.innerHTML = "Title";
  titleText.classList.add("center");
  newTitle.appendChild(titleText);
};

function createAuthor() {
  newAuthor = document.createElement("section");
  newAuthor.classList.add("author");
  all.appendChild(newAuthor);

  authorText = document.createElement("h4");
  authorText.innerHTML = "Author";
  authorText.classList.add("center");
  newAuthor.appendChild(authorText);
};

function createSubtitle() {
  newSubtitle = document.createElement("section");
  newSubtitle.classList.add("subtitle");
  all.appendChild(newSubtitle);

  subtitleText = document.createElement("h4");
  subtitleText.innerHTML = "Subtitle";
  newSubtitle.appendChild(subtitleText);
};

function createParagraph() {
  newParagraph = document.createElement("section");
  newParagraph.classList.add("paragraph");
  all.appendChild(newParagraph);

  paragraphText = document.createElement("h5");
  paragraphText.innerHTML = "Type stuff here";
  newParagraph.appendChild(paragraphText);
};

function createList() {
  newList = document.createElement("section");
  newList.classList.add("list");
  all.appendChild(newList);

  unorderedList = document.createElement("ul");
  newList.appendChild(unorderedList);

  for (i = 0; i < 2; i++) {
    listText = document.createElement("li");
    listText.classList.add("listItem");
    listText.innerHTML = "List item here";
    unorderedList.appendChild(listText);
  };

  listText = document.createElement("li");
  listText.classList.add("listItem");
  listText.innerHTML = "Hit enter to add more items";
  unorderedList.appendChild(listText);
};
