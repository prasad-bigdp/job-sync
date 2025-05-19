// const express = require('express');
// const router = express.Router();
// const Employer = require('../models/Employer');
// const authMiddleware = require("../middleware/authMiddleware")
// const jwt = require("jsonwebtoken")
// const bcrypt = require('bcryptjs');

// const JWT_SECRET = "your_jwt_secret_key";

// router.post('/register',async(req,res)=>{
//     const { name, email,phone, password, company } = req.body;

//     try {
//         const existingEmployer = await Employer.findOne({ email });
//         if (existingEmployer) {
//             return res.status(400).json({ message: "Employer already exists" });
//         }
//         const hashedPassword = await bcrypt.hash(password, 10);

//         const newEmployer = new Employer({
//             name,email,phone,password: hashedPassword,company
//         });

//         await newEmployer.save();
//         const token = jwt.sign({ id: newEmployer._id }, JWT_SECRET, { expiresIn: '1h' });

//         res.status(201).json({ message: "Employer registered successfully", token });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Server error" });
//     }
// })
// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {

//         const employer = await Employer.findOne({ email });
//         if (!employer) {
//             return res.status(404).json({ message: "Employer not found" });
//         }

//         const isMatch = await bcrypt.compare(password, employer.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: "Invalid credentials" });
//         }
//         const token = jwt.sign({ id: employer._id }, JWT_SECRET, { expiresIn: '1h' });

//         res.status(200).json({ message: "Login successful", token });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Server error" });
//     }
// });
// module.exports = router;

const express = require("express")
const router = express.Router()
const employerController = require("../controllers/employerController")
const employerAuthController = require("../controllers/employerAuthController")
const authMiddleware = require("../middleware/authMiddleware")

// Public routes
router.post("/register", employerController.createEmployer)
router.post("/login",authMiddleware,employerAuthController.loginEmployer)

// Protected routes
router.get(
	"/dashboard",
	authMiddleware,
	employerAuthController.getEmployerDashboard,
)
router.get("/", authMiddleware, employerController.getAllEmployers)
router.get("/:id", authMiddleware, employerController.getEmployerById)

module.exports = router;