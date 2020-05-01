$("h1").text("시작하려면 키보드를 누르세요");

var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

function nextSequence() {
  started = true;
  var randomNumber;
  randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
  level++;
}

$(".btn").on("click", function (event) {
  var userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  playSound(userChosenColor);
  animatePress(userChosenColor);
});

function playSound(randomChosenColor) {
  var sound = new Audio("sounds/" + randomChosenColor + ".mp3");
  sound.play();
}

function animatePress(ap) {
  var currentColor = ap;
  $("#" + ap)
    .addClass("pressed")
    .delay(100)
    .queue(function (next) {
      $(this).removeClass("pressed");
      next();
    });
}

$(document).keypress(function () {
  if (started === false) {
    nextSequence();
    $("h1").text("레벨 " + level);
  }
});
