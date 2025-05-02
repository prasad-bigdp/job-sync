const jwt = require("jsonwebtoken");

module.exports = function(req , res , next) {
    const authHeader = req.header("Authorization")

    if(!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({message : "Access denied. No token provided."})
    }

    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token.env.JWT_SECRET)  

        req.user = decoded
        next()
    }
    catch(err) {
        res.status(401).json({message : "Invalid token."})
    }
}