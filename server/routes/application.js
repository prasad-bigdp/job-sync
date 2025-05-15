const express = require('express');
const { appliedJobs } = require('../controllers/applicationController');
const { upload } = require('../config/cloudinary');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// POST /applieadJobs/:jobId
router.post('/:jobId', authMiddleware, upload.single("resume"), appliedJobs);

module.exports = router;