const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.json({ message: 'Token required' });

  const token = authHeader.split(' ')[1];

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      console.error('JWT error:', err.message);
      return res.json({ message: 'Invalid or expired token' });
    }
    req.user = decoded;
    next();
  });
};
