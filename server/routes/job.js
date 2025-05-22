const express = require("express")
const router = express.Router()
const jobController = require("../controllers/jobController")
const authMiddleware = require("../middleware/authMiddleware")

// Public route to get all jobs
router.get("/", jobController.getAllJobs)

//Public route to get single job by job-id
router.get("/:id", jobController.getJobById)

// Protected route for users to get matched jobs (requires user to be logged in)
router.get("/matched", authMiddleware, jobController.getMatchedJobs)

// Protected route for employers to get specific employers posted job (requires employer to be logged in)
router.get("/employer/:id", authMiddleware, jobController.getJobsByEmployerId)

//added route path for job matching :
router.get("/match", authMiddleware, jobController.getMatchedJobs)

module.exports = router
