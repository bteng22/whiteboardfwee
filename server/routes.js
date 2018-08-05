const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const JobsController = require('./controllers/JobsController');
const PaymentsController = require('./controllers/PaymentsController');

router.get('/jobs', JobsController.getAllJobs);
router.post('/jobs', upload.fields([]), JobsController.createJob);

router.post('/charge', PaymentsController.chargeUser);

module.exports = router;
