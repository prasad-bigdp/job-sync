const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.json({ message: 'Server error' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.json({ message: 'Server error' });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: 'User created successfully' });
  } catch (err) {
    console.error("Error creating user:", err);
    res.json({ message: 'Server error', error: err.message });
  }
};