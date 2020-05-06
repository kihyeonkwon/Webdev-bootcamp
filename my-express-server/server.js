//jshint esversion:6

const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.send("<h1>Hello</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at : ohy0720@naver.com");
});

app.get("/about", function (req, res) {
  res.send("Hi I live at Murim ");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
