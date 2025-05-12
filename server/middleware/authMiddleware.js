//Middleware for authentication :
const jwt = require("jsonwebtoken");
const Employer = require("../models/Employer");

const authMiddleware = async (req, res, next) => {
	const authHeader = req.header("Authorization");

	if (authHeader && authHeader.startsWith("Bearer")){
		const token = authHeader.split(" ")[1]; // Bearer <token>
		try{
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			if (!decoded) {
				return res.status(401).json({ message: "Invalid token" });  //verify token
			  }

			  const employer = await Employer.findById(decoded.id).select("-password");
			  if (!employer) {
				return res.status(401).json({ message: "Unauthorized" });  //find employer
			  }
			  req.user = employer;
			  return next();
		} catch(err) {
			return res.status(401).json({ message: err.message }); //catch error
		}
	}
	res.status(401).json({ message: "There is no token found !" });
};

module.exports = authMiddleware;

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
