const jwt = require("jsonwebtoken")
const Employer = require("../models/Employer")
const bcrypt = require("bcryptjs")

const SECRET_KEY = process.env.JWT_SECRET
	   

exports.loginEmployer = async (req, res) => {
	const { email, password } = req.body

	try {
		const employer = await Employer.findOne({ email })

		if (!employer) {
			return res
				.status(404)
				.json({ success: false, message: "Employer not found" })
		}

		const isMatch = await bcrypt.compare(password, employer.password)
		if (!isMatch) {
			return res
				.status(400)
				.json({ success: false, message: "Incorrect password" })
		}

		const token = jwt.sign(
			{ email: employer.email, employerId: employer._id, role: employer.role },
			SECRET_KEY,
			{ expiresIn: "1h" },
		)

		const { password: _, ...employerWithoutPassword } = employer.toObject()
		res.json({ success: true, token, employer: employerWithoutPassword })
	} catch (err) {
		console.error("Login error:", err)
		res.status(500).json({ success: false, message: "Server error" })
	}
}

exports.getEmployerDashboard = async (req, res) => {
	try {
		const employer = await Employer.findById(req.user.employerId).select(
			"-password",
		)
		if (!employer) {
			return res
				.status(404)
				.json({ success: false, message: "Employer not found" })
		}

		res.json({ success: true, employer })
	} catch (err) {
		console.error("Dashboard fetch error:", err)
		res
			.status(500)
			.json({ success: false, message: "Error fetching employer data" })
	}
}