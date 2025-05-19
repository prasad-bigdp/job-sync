// const express = require('express');
// const router = express.Router();
// const authMiddleware = require("../middleware/authMiddleware")
// const {createJob,getMatchedJobs } = require("../controllers/jobController");
// const Job = require("../models/Job");

// router.get("/match", authMiddleware, getMatchedJobs);

// router.post('/create-job',authMiddleware, createJob);
// router.delete('/:id',async(req,res)=>{
//    try {
//         const deletedJob = await Job.findByIdAndDelete(req.params.id);
//         if (!deletedJob) return res.status(404).json({ message: 'Job not found' });
//         res.status(200).json({ message: 'Job deleted successfully' });
//       } catch (err) {
//         res.status(500).json({ message: err.message });
//       }
// });
// router.put("/:id",async(req,res)=>{
//    try {
//     const updatedJob = await Job.findByIdAndUpdate(
//       req.params.id,
//       {
//         title: req.body.title,
//         description: req.body.description,
//         company:req.body.company,
//         location:req.body.location,
//         salaryRange:req.body.salaryRange,
//         skillsRequired: req.body.skillsRequired,
//       },
//       { new: true }
//     );
//     res.json(updatedJob);
//   } catch (err) {
//     console.error("Update error:", err);
//     res.status(500).json({ error: "Failed to update job" });
//   }
// });

// router.get("/match", authMiddleware, getMatchedJobs);

// router.get('/', async(req, res) => {
//   try {
//     const jobs = await Job.find(); 
//         console.log("Jobs fetched from DB:", jobs);

//     res.json(jobs); 
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server Error' });
//   }
// });

// // Get a single job by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const job = await Job.findById(req.params.id);
//     if (!job) return res.status(404).json({ message: 'Job not found' });
//     res.json(job);
//   } catch (err) {
//     console.error("Error fetching job by ID:", err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });


// module.exports = router;
const express = require("express")
const router = express.Router()
const jobController = require('../controllers/jobController');
const authMiddleware = require("../middleware/authMiddleware")

// Public route to get all jobs
router.get("/", jobController.getAllJobs)

//Public route to get single job by job-id
router.get("/:id", jobController.getJobById)

// Protected route for users to get matched jobs (requires user to be logged in)
router.get("/matched", authMiddleware, jobController.getMatchedJobs)

// Protected route for employers to get specific employers posted job (requires employer to be logged in)
router.get("/employer/:id", authMiddleware, jobController.getJobsByEmployerId)

// Protected route for employers to post a new job (requires employer to be logged in)
router.post("/", authMiddleware, jobController.createJob)  

// Protected route for employers to update a job (requires employer to be logged in)
router.put("/:id", authMiddleware, jobController.updateJob)

// Protected route for employers to delete a job (requires employer to be logged in)
router.delete("/:id", authMiddleware, jobController.deleteJob)

module.exports = router