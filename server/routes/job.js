const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")
const jobController = require("../controllers/jobController")

router.get("/match" , auth , jobController.getMatchedJobs)

module.exports = router