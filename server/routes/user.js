const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Public routes
router.post('/login', authController.loginUser); 
router.post('/', userController.createUser);     
router.get('/', userController.getAllUsers);     
  

// Protected route
router.get('/user-dashboard', authMiddleware, authController.getUserDashboard); 

// dynamic route

router.get('/:id', userController.getUserById);
module.exports = router;