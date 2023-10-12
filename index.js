require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

const data = {
  summary: [],
  grandTotal: {
    commercialCount: 0,
    standbyCount: 0,
    traineeCount: 0,
    leaveCount: 0,
    absentCount: 0,
    totalCount: 0,
  },
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Preeti");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Welcome Youtube</h2>");
});

app.get("/users", (req, res) => {
  res.json(data);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
