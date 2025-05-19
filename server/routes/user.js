// const Job = require("../models/Job");
// const express = require('express');
// const router = express.Router();
// const authMiddleware = require("../middleware/authMiddleware");
// const { loginUser } = require("../controllers/authController");



// router.get("/login",authMiddleware,loginUser);

// router.get('/', authMiddleware, async (req, res) => {
//   try {
//     const jobs = await Job.find().sort({ createdAt: -1 });
//     res.json(jobs);
//   } catch (error) {
//     console.error('Fetching jobs error:', error);
//     res.status(500).send('Server error');
//   }
// });

// module.exports = router;

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