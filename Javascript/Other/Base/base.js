
// Add font
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', "https://fonts.googleapis.com/css2?family=Manjari:wght@100&display=swap");
document.head.appendChild(link);

// Add alert sound
var alertSound = document.createElement('audio');
alertSound.id = 'alertSound';
alertSound.controls = 'controls';
alertSound.src = '/../Other/Sounds/alert.mp3';
alertSound.type = 'audio/mpeg';
alertSound.style.display = "none";
document.body.appendChild(alertSound);
