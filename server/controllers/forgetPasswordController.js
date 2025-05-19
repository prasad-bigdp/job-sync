const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Employer = require('../models/Employer');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

async function findAccountByEmail(email) {
  let account = await Employer.findOne({ email });
  let type = 'employer';
  if (!account) {
    account = await User.findOne({ email });
    type = 'user';
  }
  return { account, type };
}

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
   
     const { account,type } = await findAccountByEmail(email);

    if (!account) return res.status(404).json({ message: 'Account not found' });

    const token = jwt.sign({ id: account._id, role: type }, process.env.JWT_SECRET, { expiresIn: '10m' });
    const resetLink = `${process.env.CLIENT_URL}/reset-password/${token}`;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      to: email,
      subject: 'Password Reset',
      html: `<h2>Password Reset</h2>
             <p>Click <a href="${resetLink}">here</a> to reset your password</p>`,
    });
    res.json({ message: 'Reset link sent', link: resetLink });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password, confirmPassword } = req.body;


  if (!password || password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long' });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const Model = decoded.role === 'employer' ? Employer : User;

    
    const hashedPassword = await bcrypt.hash(password, 10);

    
    await Model.findByIdAndUpdate(decoded.id, { password: hashedPassword });

    res.json({ message: 'Password reset successful' });
  } catch (err) {
    res.status(400).json({ message: 'Invalid or expired token' });
  }
};