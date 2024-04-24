const express = require("express");
const app = express();
const jsonData = require("./db.json");

const cors = require("cors");

const port = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

app.get("/", (req, res) => {
  res.send("Manchester United Players");
});

app.get("/datas", (req, res) => {
  res.send(jsonData);
});

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
