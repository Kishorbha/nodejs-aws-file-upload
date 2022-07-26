const express = require("express");
const api = require("./api");

const app = express();

require("dotenv").config();

const port = process.env.port || 3000;

require("./lib/db");

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/view", function (req, res) {
  res.render("view");
});

app.use("/api", api);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
