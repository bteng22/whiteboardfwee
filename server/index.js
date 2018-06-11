const path = require("path");
const express = require("express");
const app = express();
const jobs = require("./jobs");

app.use("/api", jobs);

app.listen(4000, () =>
  console.log("WhiteboardFwee API listening on port 4000!")
);
