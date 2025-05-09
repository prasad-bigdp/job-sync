const express = require("express")
const router = express.Router()
const auth = require("../middleware/authMiddleware")
const jobController = require("../controllers/jobController")

//added route path for job matching :

router.get("/match" , auth , jobController.getMatchedJobs)

// added route path for filter job :

router.get("/filter" , jobController.getFilteredJobs)

module.exports = router