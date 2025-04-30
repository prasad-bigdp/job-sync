const express = require("express")
const router = express.Router()
const Job = require("../models/Job")
const authMiddleware = require("../middleware/authMiddleware")

router.post("/", authMiddleware, async (req, res) => {
	try {
		const job = new Job(req.body)
		await job.save()
		res.status(201).json(job)
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
})

module.exports = router
