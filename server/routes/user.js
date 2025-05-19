const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const authController = require("../controllers/authController")
const authMiddleware = require("../middleware/authMiddleware")

// Public routes

router.post('/login', authController.loginUser); 
router.post('/', userController.createUser);     
router.get('/', userController.getAllUsers);  
  
  


// Protected routes - require authentication
router.get("/dashboard", authMiddleware, authController.getUserDashboard)
router.get("/", authMiddleware, userController.getAllUsers)
router.get("/:id", authMiddleware, userController.getUserById)


module.exports = router

