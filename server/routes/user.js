const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const {getUserProfile,updateUserProfile} = require('../controllers/userController');
// Public routes
router.post('/login', authController.loginUser); 
router.post('/', userController.createUser);     
router.get('/', userController.getAllUsers);  
  
  

// Protected route
router.get('/user-dashboard', authMiddleware, authController.getUserDashboard); 





//group-7 profile

//Get user profile by ID
router.get('/:id',getUserProfile);
//Update user profile
router.put('/:id', authMiddleware, updateUserProfile);


module.exports = router;