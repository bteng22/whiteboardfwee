const Job = require('../models/Job');

const getAllJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    console.error('Could not fetch all jobs', error);
    res.send(400);
  }
};

const createJob = async (req, res, next) => {
  const { body } = req;
  const sanitizedRequest = Object.assign({}, body, {
    isRemote: body.isRemote === 'true'
  });

  try {
    await Job.create(sanitizedRequest);
  } catch (error) {
    console.error('Could not save job', error);
    res.send(500);
  }

  res.send(201);
}

module.exports = {
  getAllJobs,
  createJob
}