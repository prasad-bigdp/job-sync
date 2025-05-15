const Job = require("../models/Job")
const User = require("../models/User")

exports.getMatchedJobs = async (req, res) => {
	try {
		const user = await User.findById(req.user.userId)

		if (!user) {
			return res.status(404).json({ success: false, message: "User not Found" })
		}

		const userSkills = user.skills
		if (!userSkills || userSkills.length === 0) {
			return res.json({
				success: true,
				message: "User has no skills listed. No jobs to match.",
				jobs: [],
			})
		}

		// Matching Logic :
		const matchedJobs = await Job.find({
			skillsRequired: { $in: userSkills },
		}).populate("employer", "name company")

		res.json({
			success: true,
			matchedCount: matchedJobs.length,
			jobs: matchedJobs,
		})
	} catch (err) {
		console.error("Error in getMatchedJobs:", err)
		if (err.name === "CastError") {
			return res
				.status(400)
				.json({ success: false, message: "Invalid user ID format" })
		}
		res
			.status(500)
			.json({ success: false, message: "Server Error fetching matched jobs" })
	}
}

exports.getJobsController = async (req, res) => {
	try {
		const jobs = await Job.find({}).populate("employer", "name company")
		res.json({ success: true, count: jobs.length, jobs })
	} catch (err) {
		console.error("Error in getJobsController:", err)
		res
			.status(500)
			.json({ success: false, message: "Server error fetching jobs" })
	}
}

exports.postJobController = (req, res) => {
	// TODO: Implement job posting logic
	res
		.status(501)
		.json({ success: false, message: "Job posting not implemented yet" })
}
