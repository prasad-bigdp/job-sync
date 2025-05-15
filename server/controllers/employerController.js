const Employer = require('../models/Employer');

exports.getAllEmployers = async (req, res) => {
  try {
    const employers = await Employer.find();
    res.json(employers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getEmployerById = async (req, res) => {
  try {
    const employer = await Employer.findById(req.params.id);
    if (!employer) return res.json({ message: 'Employer not found' });
    res.json(employer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createEmployer = async (req, res) => {
  try {
    const employer = new Employer(req.body);
    await employer.save();
    res.status(201).json({ message: 'Employer created successfully' });
  } catch (err) {
    console.error("Error creating employer:", err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};