const express = require('express');
const router = express.Router();
const employerController = require('../controllers/employerController');
const authController = require('../controllers/employerAuthController');
const authMiddleware = require('../middleware/authMiddleware');


// Public routes
router.post('/login', authController.loginEmployer);
router.post('/', employerController.createEmployer);
router.get('/', employerController.getAllEmployers);

// Protected route
router.get('/employer-dashboard', authMiddleware, authController.getEmployerDashboard);

// Dynamic route
router.get('/:id', employerController.getEmployerById);


module.exports = router;