const Employer = require("../models/Employer")
const bcrypt = require("bcryptjs")

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
		const { email, password, ...rest } = req.body
		let existingEmployer = await Employer.findOne({ email })
		if (existingEmployer) {
			return res
				.status(400)
				.json({
					success: false,
					message: "Employer with this email already exists",
				})
		}

		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(password, salt)

		const employer = new Employer({ email, password: hashedPassword, ...rest })
		await employer.save()

		const { password: _, ...employerWithoutPassword } = employer.toObject()
		res
			.status(201)
			.json({
				success: true,
				message: "Employer created successfully",
				employer: employerWithoutPassword,
			})
	} catch (err) {
		console.error("Error creating employer:", err)
		res
			.status(500)
			.json({ success: false, message: "Server error", error: err.message })
	}
}
