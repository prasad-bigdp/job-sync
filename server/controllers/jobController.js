
const Job = require("../models/Job")
const User = require("../models/User")
const Employer = require("../models/Employer")

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

// get all jobs
exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find().populate("employer", "company");
        if (!jobs || jobs.length === 0) {
            return res.status(404).json({ message: "No jobs found" });
        }
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ 
            message: error.message 
        });
    }
};

//get job by job id
exports.getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id).populate("employer", "company");
        if (!job) {
            return res.status(404).json({ message: "No jobs found" });
        }
        res.json(job);
    } catch (error) {
        res.status(500).json({ 
            message: error.message 
        });
    }
};

// create job --employers
exports.createJob = async (req, res) => {
    try {  
      if (!req.user || !req.user.id) {
        return res.status(401).json({ message: "you are not authorized to create job !" });
      }
  
      const employerId = req.user.id;
      const newJobData = { ...req.body, employer: employerId };
  
      const newJob = new Job(newJobData);
  
      const savedJob = await newJob.save();
  
      await Employer.findByIdAndUpdate(employerId, {
        $push: { createdJobs: savedJob._id },
      });
      res.status(201).json(savedJob,{message: "Job created successfully"});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // get jobs by employer id --employers
exports.getJobsByEmployerId = async (req, res) => {
    try {
        const employerId = req.user.id;
        const jobs = await Job.find({ employer: employerId }).populate("employer", "company");

        if (!jobs || jobs.length === 0) {
            return res.status(404).json({ message: "No jobs found for this employer" });
        }
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// update job --employers
exports.updateJob = async (req, res) => {
    try {
        const employerId = req.user.id;
        const job = await Job.findById(req.params.id);

        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }

        if (job.employer.toString() !== employerId) {
            return res.status(403).json({
                message: "Not authorized to update this job",
            });
        }

        const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .populate("employer", "company");
        return res.json(updatedJob);

    } catch (error) {
       return res.status(400).json({ message: error.message });
    }
};

// delete job --employers
exports.deleteJob = async (req, res) => {
    try {
        const employerId = req.user.id;
        const job = await Job.findById(req.params.id);

        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }

        if (job.employer.toString() !== employerId) {
            return res.status(403).json({
                message: "Not authorized to delete this job",
            });
        }

        await Job.findByIdAndDelete(req.params.id);

        await Employer.findByIdAndUpdate(employerId, {
            $pull: { createdJobs: req.params.id },
        });

        res.json({ message: "Job deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

