const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  isRemote: Boolean,
  url: {
    type: String,
    required: true,
  },
  description: String,
  process: String,
});

module.exports = mongoose.model('Job', JobSchema);
