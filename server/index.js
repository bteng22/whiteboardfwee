const express = require("express");
const routes = require("./routes");
const app = express();

app.use("/api", routes);

app.listen(4000, (err) => {
  if (err) {
    console.log('Error starting server', err);
    process.exit(1);
  }
  console.log("WhiteboardFwee API listening on port 4000!")
  require('./utils/database');
});
