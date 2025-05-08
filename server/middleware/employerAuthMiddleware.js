const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Token required' });

  const token = authHeader.split(' ')[1];

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      console.error('JWT error:', err.message);
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
    req.user = decoded;
    next();
  });
};