const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const authMiddleware = require('../middleware/authMiddleware');


router.get("/", jobController.getAllJobs)
router.get("/:id", jobController.getJobById)
router.get("/employer/:id", authMiddleware, jobController.getJobsByEmployerId)
router.post("/", authMiddleware, jobController.createJob)  
router.put("/:id", authMiddleware, jobController.updateJob)
router.delete("/:id", authMiddleware, jobController.deleteJob)

module.exports = router