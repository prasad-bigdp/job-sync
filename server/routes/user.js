const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const authController = require("../controllers/authController")
const authMiddleware = require("../middleware/authMiddleware")

// Public routes
router.post("/register", userController.createUser)
router.post("/login", authController.loginUser)

// Protected routes - require authentication
router.get("/dashboard", authMiddleware, authController.getUserDashboard)
router.get("/", authMiddleware, userController.getAllUsers)
router.get("/:id", authMiddleware, userController.getUserById)

module.exports = router
