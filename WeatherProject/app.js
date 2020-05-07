const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.cityName;

  const url =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    query +
    "&units=metric&appid=4af4d07cb88e48380fc2418e6f5646d7";
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const tempData = weatherData.list[0].main.temp;
      const description = weatherData.list[0].weather[0].description;
      const weatherIcon =
        "https://openweathermap.org/img/wn/" +
        weatherData.list[0].weather[0].icon +
        "@2x.png";
      console.log(tempData);
      console.log(description);
      res.write(
        "<h1>The temperature in " +
          query +
          " is" +
          tempData +
          "degrees Celcius.</h1>"
      );
      res.write("<p>The weather is " + description + "</p>");
      res.write("<img src= " + weatherIcon + ">");

      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
