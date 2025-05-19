const User = require("../models/User")
const bcrypt = require("bcryptjs")

exports.getAllUsers = async (req, res) => {
	try {
		const users = await User.find().select("-password")
		res.json({ success: true, users })
	} catch (err) {
		console.error(err)
		res.status(500).json({ success: false, message: "Server error" })
	}
}

exports.getUserById = async (req, res) => {
	try {
		const user = await User.findById(req.params.id).select("-password")
		if (!user)
			return res.status(404).json({ success: false, message: "User not found" })
		res.json({ success: true, user })
	} catch (err) {
		console.error(err)
		if (err.name === "CastError") {
			return res
				.status(400)
				.json({ success: false, message: "Invalid user ID format" })
		}
		res.status(500).json({ success: false, message: "Server error" })
	}
}

exports.createUser = async (req, res) => {
	try {
		const { email, password, ...rest } = req.body
		let existingUser = await User.findOne({ email })
		if (existingUser) {
			return res
				.status(400)
				.json({
					success: false,
					message: "User with this email already exists",
				})
		}

		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(password, salt)

		const user = new User({ email, password: hashedPassword, ...rest })
		await user.save()

		const { password: _, ...userWithoutPassword } = user.toObject()
		res
			.status(201)
			.json({
				success: true,
				message: "User created successfully",
				user: userWithoutPassword,
			})
	} catch (err) {
		console.error("Error creating user:", err)
		res
			.status(500)
			.json({ success: false, message: "Server error", error: err.message })
	}
}