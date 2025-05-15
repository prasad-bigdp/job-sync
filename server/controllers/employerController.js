const Employer = require('../models/Employer');
const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.getAllEmployers = async (req, res) => {
  try {
    const employers = await Employer.find();
    res.json(employers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getEmployerById = async (req, res) => {
  try {
    const employer = await Employer.findById(req.params.id);
    if (!employer) return res.json({ message: 'Employer not found' });
    res.json(employer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createEmployer = async (req, res) => {
  try {
    const { email, password, ...rest } = req.body;

    // Check if email exists in Employer or User
    const existingEmployer = await Employer.findOne({ email });
    const existingUser = await User.findOne({ email });

    if (existingEmployer || existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const employer = new Employer({ ...rest, email, password: hashedPassword });

    await employer.save();
    res.status(201).json({ message: "Employer created successfully" });
  } catch (err) {
    console.error("Error creating employer:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};