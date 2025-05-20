
const Employer = require('../models/Employer');
const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.getAllEmployers = async (req, res) => {
	try {
		const employers = await Employer.find().select("-password")
		res.json({ success: true, employers })
	} catch (err) {
		console.error(err)
		res.status(500).json({ success: false, message: "Server error" })
	}
}

exports.getEmployerById = async (req, res) => {
	try {
		const employer = await Employer.findById(req.params.id).select("-password")
		if (!employer)
			return res
				.status(404)
				.json({ success: false, message: "Employer not found" })
		res.json({ success: true, employer })
	} catch (err) {
		console.error(err)
		if (err.name === "CastError") {
			return res
				.status(400)
				.json({ success: false, message: "Invalid employer ID format" })
		}
		res.status(500).json({ success: false, message: "Server error" })
	}
}

exports.createEmployer = async (req, res) => {

  try {
    const { email, password, ...rest } = req.body;

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

