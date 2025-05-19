// const jwt = require('jsonwebtoken');
// const User=require('../models/Job');
// const bcrypt = require('bcryptjs');

// const JWT_SECRET = "your_jwt_secret_key";

// exports.loginUser = async (req, res) => {
//    const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'Invalid credentials' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

//     const payload = { userId: user._id, role: user.role };
//     const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });

//     res.json({ token, user });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).send('Server error');
//   }
// };

const jwt = require("jsonwebtoken")
const User = require("../models/User")
const bcrypt = require("bcryptjs")

const SECRET_KEY = process.env.JWT_SECRET

exports.loginUser = async (req, res) => {
	const { email, password } = req.body
	try {
		const user = await User.findOne({ email })

		if (!user)
			return res.status(404).json({ success: false, message: "User not found" })

		const isMatch = await bcrypt.compare(password, user.password)
		if (!isMatch)
			return res
				.status(400)
				.json({ success: false, message: "Incorrect password" })

		const token = jwt.sign(
			{ email: user.email, userId: user._id, role: user.role },
			SECRET_KEY,
			{ expiresIn: "1h" },
		)

		const { password: userPassword, ...userWithoutPassword } = user.toObject()
		res.json({ success: true, token, user: userWithoutPassword })
	} catch (err) {
		console.error("Login error:", err)
		res.status(500).json({ success: false, message: "Server error" })
	}
}

exports.getUserDashboard = async (req, res) => {
	try {
		const user = await User.findById(req.user.userId).select("-password")
		if (!user)
			return res.status(404).json({ success: false, message: "User not found" })
		res.json({ success: true, user })
	} catch (err) {
		console.error("Dashboard fetch error:", err)
		res
			.status(500)
			.json({ success: false, message: "Error fetching user data" })
	}
}