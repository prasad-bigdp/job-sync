
const Employer = require('../models/Employer');
const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.getAllEmployers = async (req, res) => {
	try {
		const employers = await Employer.find().select("-password")
		res.json({ success: true, employers })
	} catch (err) {
		console.error(err)
		res.status(500).json({ success: false, message: "Server error" })
	}
}


exports.createEmployer = async (req, res) => {

  try {
    const { email, password, ...rest } = req.body;

    const existingEmployer = await Employer.findOne({ email });
    const existingUser = await User.findOne({ email });

    if (existingEmployer || existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const employer = new Employer({ ...rest, email, password: hashedPassword });

    await employer.save();
    res.status(201).json({ message: "Employer created successfully" });
  } catch (err) {
    console.error("Error creating employer:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


//group-7 profile

//Get employer profile by ID
exports.getEmployerProfile = async (req, res) => {
  try {
    const employer = await Employer.findById(req.params.id).populate('createdJobs').select("-password");
    if (!employer) return res.status(404).json({ 
      success: false,
      error: 'Employer not found' 
    });
    res.json(employer);
  } catch (err) {
    res.status(500).json({
      success: false, 
		  error: err.message 
	  });
  }
};

//Upadte employer profile by ID
exports.updateEmployerProfile = async (req, res) => {
  if (req.user.role !== 'employer' || req.user.employerId !== req.params.id) {
    return res.status(403).json({ 
      success: false,
      error: 'You are not authorized to update this profile' 
    });
  }

  try {
    const updates = req.body;
    const updatedEmployer = await Employer.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });
    res.json(updatedEmployer);
  } catch (err) {
    res.status(500).json({ 
      success: false,
      error: err.message 
    });
  }
};
