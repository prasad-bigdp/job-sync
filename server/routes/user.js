const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');


// Public routes
router.post("/register", userController.createUser)
// Protected routes - require authentication
router.get("/", authMiddleware, userController.getAllUsers)
router.get("/:id", authMiddleware, userController.getUserById)


// Public routes
router.post('/login', authController.loginUser); 
  
  

// Protected route
router.get('/user-dashboard', authMiddleware, authController.getUserDashboard); 

router.get('/:id', userController.getUserById);

module.exports = router;
