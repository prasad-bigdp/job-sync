const Application = require("../models/Application")
const Job = require("../models/Job")
const User = require("../models/User")

// Apply For Job Controller
exports.createApplication = async function (req, res, next) {
	try {
		const userId = req.user.userId
		const user = await User.findById(userId).select("-password")
		if (!user) {
			return res.status(404).json({ success: false, message: "User not found" })
		}

		const jobId = req.params.jobId
		const job = await Job.findById(jobId)
		if (!job) {
			return res.status(404).json({ success: false, message: "Job not found" })
		}

		const existingApplication = await Application.findOne({
			user: userId,
			job: jobId,
		})
		if (existingApplication) {
			return res
				.status(400)
				.json({
					success: false,
					message: "You have already applied for this job",
				})
		}

		if (!req.file || !req.file.path) {
			return res
				.status(400)
				.json({
					success: false,
					message: "Resume is required and upload failed. Please try again.",
				})
		}

		const application = new Application({
			user: userId,
			job: jobId,
			employer: job.employer,
			resumeUrl: req.file.path,
			message: req.body.message || "",
		})
		await application.save()

		await Job.findByIdAndUpdate(jobId, { $inc: { applicantsCount: 1 } })

		user.appliedJobs.push(jobId)
		await user.save()

		return res.status(201).json({
			success: true,
			message: "Application submitted successfully!",
			application,
		})
	} catch (error) {
		console.error("Error creating application:", error.message)
		if (error.name === "CastError") {
			return res
				.status(400)
				.json({ success: false, message: "Invalid ID format for user or job." })
		}
		return res
			.status(500)
			.json({
				success: false,
				message: "Server error. Please try again later.",
			})
	}
}