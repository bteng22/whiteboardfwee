const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer();
const JobsController = require('./controllers/JobsController');

router.get("/jobs", JobsController.getAllJobs);
router.post("/jobs", upload.fields([]), JobsController.createJob);

module.exports = router;
