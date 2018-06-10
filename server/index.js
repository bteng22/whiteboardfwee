const express = require("express");
const app = express();
const jobs = require("./jobs");

app.use("/api", jobs);

app.listen(4000, () => console.log("Example app listening on port 4000!"));
