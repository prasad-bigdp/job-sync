const express = require("express")
const router = express.Router()
const authMiddleware = require("../middleware/authMiddleware")
const {
	getJobsController,
	postJobController,
	getMatchedJobs,
} = require("../controllers/jobController")

// Public route to get all jobs
router.get("/", getJobsController)

// Protected route for users to get matched jobs (requires user to be logged in)
router.get("/matched", authMiddleware, getMatchedJobs)

// Protected route for employers to post a new job (requires employer to be logged in)
router.post("/", authMiddleware, postJobController)
// Consider adding role-based authorization here to ensure only employers can post jobs.

module.exports = router
