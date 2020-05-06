//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  console.log(weight);
  var result = weight / (height / 100) ** 2;
  res.send("Thanks for posting that. Your BMI is " + result);
});

app.listen(3000, function () {
  console.log("server running on port 3000.");
});
