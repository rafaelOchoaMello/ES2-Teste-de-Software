const express = require("express");
const app = express();

app.use(express.json());

const routes = require("./routes");
app.use(routes);

app.get("/", (req, res) => {
  res.send("Programação para Internet II - Trabalho 2 (Rafael Ochôa Mello)");
});

module.exports = app;