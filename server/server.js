const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const connectDB = require("./config/db")

dotenv.config()
connectDB()

const app = express()

// Middleware
app.use(
	cors({
		origin: process.env.CLIENT_URL || "http://localhost:3000",
		credentials: true,
	}),
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
//app.use("/api/auth", require("./routes/auth"))
app.use("/api/users", require("./routes/user"))
app.use("/api/employers", require("./routes/employer"))
app.use("/api", require("./routes/resetPasswordRoute"))
app.use("/api/jobs", require("./routes/job"))
app.use("/api/applications", require("./routes/application"))

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(err.status || 500).json({
		success: false,
		error: err.message || "Server Error",
	})
})

// 404 handler
app.use((req, res) => {
	res.status(404).json({
		success: false,
		error: "Route not found",
	})
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
