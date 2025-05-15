const jwt = require('jsonwebtoken');
const User = require('../models/User');

const dotenv = require('dotenv');
dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET;

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) return res.json({ success: false, message: 'User not found' });
    if (user.password !== password) return res.json({ success: false, message: 'Incorrect password' });

    const token = jwt.sign({ email: user.email, userId: user._id }, SECRET_KEY, { expiresIn: '1h' });

    const { password: userPaswword, ...userWithoutPassword } = user.toObject();
    res.json({ success: true, token, user: userWithoutPassword });
  } catch (err) {
    console.error('Login error:', err);
    res.json({ success: false, message: 'Server error' });
  }
};

exports.getUserDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) return res.json({ message: 'User not found' });
    res.json({ user });
  } catch (err) {
    console.error('Dashboard fetch error:', err);
    res.json({ message: 'Database error', error: err.message });
  }
};
