
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET;
//Middleware for authentication :
const authMiddleware = (req, res, next) => {
	const authHeader = req.header("Authorization")
	console.log(req.headers);

	if (!authHeader) return res.status(401).json({ message: "No token provided" })

	const token = authHeader.split(" ")[1] // Bearer <token>
	try {
		const decoded = jwt.verify(token, SECRET_KEY)
		req.user = decoded; // contains userId or employerId and role
		next()
	} catch (err) {
		res.status(401).json({ message: "Invalid token" })
	}
}


module.exports = authMiddleware;
