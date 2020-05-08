$("h1").text("시작하려면 키보드를 누르세요");

var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

function nextSequence() {
  userClickedPattern = [];
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
  $("h1").text("레벨 " + level);
}

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

function startOver() {
  started = false;
  level = 0;
  gamePattern = [];
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    playSound("wrong");
    $("body")
      .addClass("game-over")
      .delay(200)
      .queue(function (next) {
        $(this).removeClass("game-over");
        next();
      });
    $("#level-title").text("Game over, Press any key to restart");
    startOver();
  }
}

$(document).keypress(function () {
  if (started === false) {
    nextSequence();
    started = true;
    $("h1").text("레벨 " + level);
  }
});

$(".btn").on("click", function (event) {
  var userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});
