const Job = require("../models/Job")
const User = require("../models/User")

exports.getMatchedJobs = (req , res) => {
    
    User.findById(req.user.id)

     .then(user => {

        if(!user) {
            return res.status(404).json({message : "User not Found"})
        }

        const userSkills = user.skills
        if(!userSkills || userSkills.length === 0) {
            return res.status(200).json({message : "User has no skills listed" , jobs : []})
        }


        // Matching Logic :
        return Job.find({skillsRequired : {$in : userSkills}})
          .populate("employer" , "name company")
          .then(matchedJobs => {
            res.json({matchedCount : matchedJobs.length , jobs : matchedJobs})
          })
     })

     .catch(err => {
        console.error(err)
        res.status(500).json({message : "Server Error"})
     })
}