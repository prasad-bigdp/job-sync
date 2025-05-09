const Job = require("../models/Job")
const User = require("../models/User")

exports.getMatchedJobs = (req , res) => {
    
    User.findById(req.user.id)

     .then(user => {

      //check existing user :
        if(!user) {
            return res.status(404).json({message : "User not Found"})
        }

        //check user skills :
        const userSkills = user.skills
        if(!userSkills || userSkills.length === 0) {
            return res.status(200).json({message : "User has no skills listed" , jobs : []})
        }


        // Matching Logic :
        return Job.find({skillsRequired : {$in : userSkills}})
          .populate("employer" , "name company")               // replaces the ObjectId ( of job field which is reference to the employer collection ) with the actual employer details..
          .then(matchedJobs => {
            res.json({matchedCount : matchedJobs.length , jobs : matchedJobs})
          })
     })

     .catch(err => {
        console.error(err)
        res.status(500).json({message : "Server Error"})
     })
}


// logic for filter job : 

exports.getFilteredJobs = (req , res) => {

  const { location , title , skills , minSalary , employer , company} = req.query;

  let filter = {} ;

  if(title) {
    filter.title = { $regex : title , $options : "i"} ;
  }

  if(location) {
    filter.location = { $regex : location , $options : "i"} ;
  }

  if(minSalary) {
    filter.salaryRange = { $regex : new RegExp(`${minSalary}` , "i") } ;
  }

  if(skills) {
    const skillArray = skills.split(",") ;
    filter.skillsRequired = { $in : skillArray }
  }

  // Query the Job collection with the constructed filter
  Job.find(filter)
     .populate("employer" , "name company email")
     .then( (jobs) => {
      let filtered = jobs ;

      // Additional filtering for employer or company if provided
      if(employer || company) {
        filtered = jobs.filter( (job) => {
          const matchEmployer = company
          ? job.employer?.company
          ?.toLowerCase()
          .includes(company.toLowerCase())
          : true ;
          return matchEmployer && matchCompany ;
        })
      }

      // if no job matches the criteria
      if(filtered.length === 0) {
        return res.status(404).json({message : "No jobs matched your criteria ."})
      }


      // return the filtered jobs : 
      res.status(200).json({
        message : `${filter.length} job(s) found .` ,
        count : filtered.length ,
        jobs : filtered
      }) ;
     })
}