const express = require('express');
const { appliedJobs } = require('../controllers/applicationController');
const { upload } = require('../config/cloudinary');
const auth = require('../middleware/auth');
const router = express.Router();

// POST /applieadJobs/:jobId
router.post('/:jobId', upload.single("resume"), appliedJobs);

module.exports = router;