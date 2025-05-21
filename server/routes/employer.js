const express = require('express');
const router = express.Router();
const employerController = require('../controllers/employerController');
const authController = require('../controllers/employerAuthController');
const authMiddleware = require('../middleware/authMiddleware');
const { getEmployerProfile, updateEmployerProfile } = require('../controllers/employerController');

// Public routes
router.post('/login', authController.loginEmployer);
router.post('/', employerController.createEmployer);
router.get('/', employerController.getAllEmployers);

// Protected route
router.get('/employer-dashboard', authMiddleware, authController.getEmployerDashboard);


// Group-7 profile
// Get employer profile by ID
router.get('/:id', getEmployerProfile);
// Update employer profile
router.put('/:id', authMiddleware, updateEmployerProfile);


module.exports = router;