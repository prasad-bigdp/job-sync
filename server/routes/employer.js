const express = require("express")
const router = express.Router()
const employerController = require("../controllers/employerController")
const employerAuthController = require("../controllers/employerAuthController")
const authMiddleware = require("../middleware/authMiddleware")


// Public routes
router.post("/register", employerController.createEmployer)
router.post("/login", employerAuthController.loginEmployer)

// Protected routes
router.get(
	"/dashboard",
	authMiddleware,
	employerAuthController.getEmployerDashboard,
)
router.get("/", authMiddleware, employerController.getAllEmployers)
router.get("/:id", authMiddleware, employerController.getEmployerById)


// Dynamic route
router.get('/:id', employerController.getEmployerById);


module.exports = router;

