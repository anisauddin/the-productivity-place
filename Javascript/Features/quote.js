
let quotes = {
  "A year from now, you will wish you had started today.": "Karen Lamb",
  "All our dreams can come true, if we have the courage to pursue them.": "Walt Disney",
  "The secret of getting ahead is getting started.": "Mark Twain",
  "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.": "Neil Gaiman",
  "Impossible is just an opinion.": "Paulo Coelho",
  "Don’t be afraid to give up the good to go for the great.": "John D. Rockefeller",
  "People who wonder if the glass is half empty or full miss the point. The glass is refillable.": "Unknown",
  "If you believe it’ll work out, you’ll see opportunities. If you don’t believe it’ll work out, you’ll see obstacles.": "Wayne Dyer",
  "You can waste your lives drawing lines. Or you can live your life crossing them.": "Shonda Rhimes",
  "If opportunity doesn’t knock, build a door.": "Kurt Cobain",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.": "Roy T. Bennett",
  "Hard work beats talent when talent doesn’t work hard.": "Tim Notke",
  "Opportunity is missed by most people because it is dressed in overalls and looks like work.": "Thomas Edison",
  "The only difference between ordinary and extraordinary is that little extra.": "Jimmy Johnson",
  "Don’t say you don’t have enough time. You have exactly the same number of hours per day that were given to Helen Keller, Pasteur, Michelangelo, Mother Teresa, Leonardo Da Vinci, Thomas Jefferson, and Albert Einstein.": "H. Jackson Brown Jr.",
  "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.": "Earl Nightingale",
  "If you cannot do great things, do small things in a great way.": "Napoleon Hill",
  "Nothing will work unless you do.": "Maya Angelou",
  "Don’t limit your challenges. Challenge your limits.": "Unknown",
  "Keep your face always toward the sunshine – and shadows will fall behind you.": "Walt Whitman",
};

quote = document.getElementById("quote");
author = document.getElementById("author");
generate = document.getElementById("generate");
generate.addEventListener("click", create);
var saying = Object.keys(quotes);

function create() {
  quote.innerHTML = saying[Math.floor(Math.random()*saying.length)]
  author.innerHTML = "- " + quotes[quote.innerHTML]
};

window.onload = (create);