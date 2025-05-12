//Middleware for authentication :
const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
	const authHeader = req.header("Authorization")
	if (!authHeader) return res.status(401).json({ message: "No token provided" })

	const token = authHeader.split(" ")[1] // Bearer <token>
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET)
		req.user = decoded // contains userId or employerId and role
		next()
	} catch (err) {
		res.status(401).json({ message: "Invalid token" })
	}
}

module.exports = authMiddleware
// module.exports = function(req , res , next) {
//     const authHeader = req.header("Authorization")

//     if(!authHeader || !authHeader.startsWith("Bearer")) {
//         return res.status(401).json({message : "Access denied. No token provided."})
//     }

//     const token = authHeader.split(" ")[1]

//     try {
//         const decoded = jwt.verify(token.env.JWT_SECRET)

//         req.user = decoded
//         next()
//     }
//     catch(err) {
//         res.status(401).json({message : "Invalid token."})
//     }
// }
