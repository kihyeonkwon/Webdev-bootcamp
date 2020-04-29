var randomNumber1 = Math.ceil(Math.random() * 6);

var fileName1 = "".concat("dice", randomNumber1, ".png");

document.querySelector(".img1").src = "images/" + fileName1;

var randomNumber2 = Math.ceil(Math.random() * 6);

var fileName2 = "".concat("dice", randomNumber2, ".png");

document.querySelector(".img2").src = "images/" + fileName2;

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
