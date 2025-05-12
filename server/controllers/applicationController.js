const Application = require("../models/Application");
const Job = require("../models/Job");
const User = require("../models/User");

// Apply For Job Controller
exports.appliedJobs = async function (req, res, next) {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found!!' });
        }

        const job = await Job.findById(req.params.jobId);
        if (!job) {
            return res.status(404).json({ message: 'Job not found!!' });
        }

        // Check Resume Uploaded
        if (!req.file || !req.file.path) {
            return res.status(400).json({ success: false, message: "Resume upload failed" });
        }

        const application = await new Application({
            user: user._id,
            job: job._id,
            employer: job.employer,
            resumeUrl: req.file.path,
            message: req.body.message
        }).save();

        job.applicantsCount += 1;
        await job.save();

        user.appliedJobs.push(job._id);
        await user.save();

        return res.status(201).json({
            success: true,
            message: 'Application submitted successfully!',
            application,
            job,
            user
        });
    }
    catch (error) {
        console.error("Error in getJobs:", error.message);
        return res.status(500).json({ success: false, message: 'Something went wrong. Please try again later.' });
    }
}