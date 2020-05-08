const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log("server is running on port 3000");
});

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendfile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  console.log(firstName, lastName, email);
});

// list id 3843cf1264

// api key 9fd6b65103b9e50d4bedeb04e3933f4e-us18
