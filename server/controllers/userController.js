const User = require('../models/User');
const Employer = require('../models/Employer');
const bcrypt = require('bcrypt');



exports.getAllUsers = async (req, res) => {
	try {
		const users = await User.find().select("-password")
		res.json({ success: true, users })
	} catch (err) {
		console.error(err)
		res.status(500).json({ success: false, message: "Server error" })
	}
}


exports.createUser = async (req, res) => {
  try {
    const { email, password, ...rest } = req.body;

    // Check if email exists in User or Employer
    const existingUser = await User.findOne({ email });
    const existingEmployer = await Employer.findOne({ email });

    if (existingUser || existingEmployer) {
      return res.status(400).json({ message: "Email already exists" });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ ...rest, email, password: hashedPassword });

    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


//group-7 profile

//Get user profile by ID
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('appliedJobs');
    if (!user) return res.status(404).json({ 
      success: false,
      error: 'User not found' 
    });
    res.json(user);
  } catch (err) {
    res.status(500).json({ 
      success: false,
      error: err.message 
    });
  }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
  if (req.user.role !== 'user' || req.user.userId !== req.params.id) {
    return res.status(403).json({ 
      success: false,
      error: 'You are not authorized to update this profile' 
    });
  }

  try {
    const updates = req.body;
    const updatedUser = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ 
      success: false,
      error: err.message
     });
  }
};
