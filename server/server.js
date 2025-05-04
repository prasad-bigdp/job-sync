const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors")
const connectDB = require('./config/db'); 
const userRoutes = require('./routes/user');

dotenv.config(); 

const app = express();
app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

// Connect to DB, then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
