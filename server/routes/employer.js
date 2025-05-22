

const express = require("express")
const router = express.Router()
const employerController = require("../controllers/employerController")
const jobController = require("../controllers/jobController")
const employerAuthController = require("../controllers/employerAuthController")
const authMiddleware = require("../middleware/authMiddleware")

// Public routes
router.post("/register", employerController.createEmployer);
router.post("/login",employerAuthController.loginEmployer)

// Protected routes
router.get(
	"/dashboard",
	authMiddleware,
	employerAuthController.getEmployerDashboard,
)
router.get("/", authMiddleware, employerController.getAllEmployers)
router.get("/:id", authMiddleware, employerController.getEmployerById)
router.get("/jobs", authMiddleware, jobController.getJobsByEmployerId)
// Public routes
//router.post('/login', authController.loginEmployer);
//router.post('/register', employerController.createEmployer);
router.get('/', employerController.getAllEmployers);

// Protected route
router.get('/employer-dashboard', authMiddleware, employerAuthController.getEmployerDashboard);


module.exports = router;