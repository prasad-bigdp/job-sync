const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const connectDB = require("./config/db")

dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

<<<<<<< Updated upstream
app.use("/api/auth", require("./routes/auth"))
app.use("/api/users", require("./routes/user"))
app.use("/api/employers", require("./routes/employer"))
app.use("/api/jobs", require("./routes/job"))
=======
// Logger
const logger = require("morgan");
app.use(logger("tiny"));


// app.use("/api/auth", require("./routes/auth"))
// app.use("/api/users", require("./routes/user"))
// app.use("/api/employers", require("./routes/employer"))
// app.use("/api/jobs", require("./routes/job"))
>>>>>>> Stashed changes
app.use("/api/applications", require("./routes/application"))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
