const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Employer = require('../models/Employer');

// Signup route for Employer
const signUp = async (req, res) => {
    const { name, email, phone, password, company } = req.body;

    try {
        // Check if employer already exists
        const existingEmail = await Employer.findOne({ email: email });
        if (existingEmail) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        //check password length is more than 6 characters
        if (password.length < 6) {
            return res.status(400).json({
                message: 'Password must be at least 6 characters long',
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new employer
        const newEmployer = new Employer({
            name: name,
            email: email,
            phone: phone,
            password: hashedPassword,
            company: company,
        });

        await newEmployer.save();

        res.status(201).json({ 
            message: 'Employer created successfully',
            employer: newEmployer,
         });
    } catch (error) {
        res.status(500).json({ 
            message: 'Employer creation failed',
            error: error.message 
        });
    }
};

// Signin route for Employer
const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if employer exists
        const employer = await Employer.findOne({ email: email });
        if (!employer) {
            return res.status(404).json({
                 message: 'Employer not found' 
                });
        }


        await bcrypt.compare(password, employer.password, (error,data)=>{
            if(data){
                const authData =[
                    {email:employer.email},
                    {role:employer.role},
                ];
                const token = jwt.sign({authData},process.env.JWT_SECRET || 'jobsync123', { 
                    expiresIn: '30d',
                });
                res.status(200).json({
                    message:'Employer login Successfully',
                    id: employer._id,
                    role:employer.role,
                    token: token,
                });
            }else{
                res.status(400).json({
                    message: 'Invalid Credentials',
                });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            message: 'Employer login failed', 
            error : error.message,
        });
    }
};

module.exports = {signUp, signIn};
