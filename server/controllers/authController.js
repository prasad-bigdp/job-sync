const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Employer = require('../models/Employer');

// Signup route for Employer
const signUp = async (req, res) => {
    const { name, email, phone, password, company } = req.body;

    try {
        // Check if employer already exists
        const existingEmployer = await Employer.findOne({ email: email });
        if (existingEmployer) {
            return res.status(400).json({ message: 'Employer already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new employer
        const newEmployer = new Employer({
            name: name,
            email: email,
            phone: phone,
            password: hashedPassword,
            company: company,
        });

        await newEmployer.save();

        res.status(201).json({ message: 'Employer created successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Signin route for Employer
const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if employer exists
        const employer = await Employer.findOne({ email: email });
        if (!employer) {
            return res.status(404).json({ message: 'Employer not found' });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, employer.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: employer._id }, process.env.JWT_SECRET || 'jobsync123', { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = {
    signUp,
    signIn,
};
