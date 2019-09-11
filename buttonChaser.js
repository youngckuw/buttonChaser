var score = 0;
var aWidth;
var aHeight;
var timer;
var iterations = 0; // number of dots

window.addEventListener("load", setGameAreaBounds);

function setGameAreaBounds() {
  aWidth = innerWidth;
  aHeight = innerHeight;
  aWidth -= 22; // 10 pixels off the sides plus 1 pixel borders for each walls
  aHeight -= 100; // height minus the page title plus score label

  document.getElementById("gameArea").style.width = aWidth + "px";
  document.getElementById("gameArea").style.height = aHeight + "px";
  document.getElementById("dot").addEventListener("click", detectHit);

  // keep 'dot' in the gameArea
  aWidth -= 74; // 64 pixels for the width of the dot plus 10 pixels as border around the gameArea
  aHeight -= 74;

  moveDot();
}

function detectHit() {
  score += 1;
  document.getElementById("scoreLabel").innerHTML = "Score: " + score;
}

function moveDot() {
  // calculate next x, y coordinates of the dot
  var x = Math.floor(Math.random() * aWidth);
  var y = Math.floor(Math.random() * aHeight);  
  // keep dot within the gameArea  
  if (x < 10) x = 10;
  if (y < 10) y = 10;
  // right and bottom is taken care of from the -74 to aWidth and aHeight
  // following is for left and top
  document.getElementById("dot").style.left = x + "px";
  document.getElementById("dot").style.top = y + "px";

  if (iterations < 10) {
    timer = setTimeout("moveDot()", 1000);
  } else {
    document.getElementById("scoreLabel").innerHTML += "    GAME OVER!";
    document.getElementById("dot").removeEventListener("click", detectHit);
    clearTimeout(timer);
  }
  iterations++;
}
