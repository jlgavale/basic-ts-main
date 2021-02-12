const express = require("express");
const app = express();

const TOKEN = 1234

// GET | POST | DELETE | PUT
app.get("/", function (request, response) {
  response.json({
    greetings: "Hello",
    complement: "World",
  });
});

app.get("/about", function (request, response) {
  response.send("About me, i don't know what i mean...");
});

app.post("/about", function (request, response) {
  response.send("About me, i don't know what i mean...");
});

app.listen(4500);