const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

const JobsController = require('./controllers/JobsController');
const PaymentsController = require('./controllers/PaymentsController');
const AuthController = require('./controllers/AuthController');

router.get('/jobs', JobsController.getAllJobs);
router.post('/jobs', upload.fields([]), JobsController.createJob);
router.post('/charge', bodyParser.text(), PaymentsController.chargeUser);
router.post('/signup/referer', upload.fields([]), bodyParser.json(), AuthController.refererSignup);

module.exports = router;
