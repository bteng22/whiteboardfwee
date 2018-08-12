const express = require('express');
const passport = require('passport');
const routes = require('./routes');
const app = express();

require('./config/database');
require('./config/passport')(passport);

app.use(passport.initialize());
app.use('/api', routes);

app.listen(4000, (err) => {
  if (err) {
    console.log('Error starting server', err);
    process.exit(1);
  }
  console.log('WhiteboardFwee API listening on port 4000!')
});
