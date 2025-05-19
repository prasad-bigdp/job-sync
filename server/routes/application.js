const express = require("express")
const { createApplication } = require("../controllers/applicationController")
const { upload } = require("../config/cloudinary")
const authMiddleware = require("../middleware/authMiddleware")
const router = express.Router()

// POST /applications/:jobId - User applies for a job
// Requires authentication (user must be logged in)
// Expects a multipart/form-data request with a 'resume' file and optional 'message' field
router.post(
	"/:jobId",
	authMiddleware,
	upload.single("resume"),
	createApplication,
)

// You might want to add other application-related routes here, for example:
// GET /applications/user - Get all applications for the logged-in user
// GET /applications/employer - Get all applications for jobs posted by the logged-in employer
// PUT /applications/:applicationId/status - Employer updates application status (shortlisted, rejected)

module.exports = router