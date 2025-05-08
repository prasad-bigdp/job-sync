const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { getJobsController, postJobController } = require('../controllers/jobController');
const app = express();
app.get('/', authMiddleware, getJobsController);
app.post('/', authMiddleware, postJobController)
