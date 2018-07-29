const mongoose = require('mongoose');
const config = require('../config');
const Job = require('../models/Job');
const jobsData = require('./jobs');

(async () => {
  try {
    await mongoose.connect(config.database.uri);
    await mongoose.connection.db.dropDatabase();
    await Job.collection.insert(jobsData);

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})()

// try {
//   connection.then(db => {
//     db.dropDatabase();
//     process.exit(0);
//   })
// } catch (e) {
//   console.error(e);
//   process.exit(1);
// }