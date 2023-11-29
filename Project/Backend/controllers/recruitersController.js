const uuid = require('uuid');
const Recruiter = require('../models/recruiters');
const jwt = require('jsonwebtoken');

// Get All Recruiters
const getAllRecruiters = async (req, res) => {
    try {
        const recruiters = await Recruiter.find();
        res.json(recruiters);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Get Single Recruiter by ID
const getRecruiterById = async (req, res) => {
    const recruiterID = req.params.id;

    try {
        const recruiter = await Recruiter.findById(recruiterID);

        if (!recruiter) {
            return res.status(404).json({ error: "Reqruiter not found" });
        }

        res.json(recruiter);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Login 
const loginRecruiter = async (req, res) => {
    const { username, password } = req.body;
    const recruiter = await Recruiter.findOne({ username });

    if (!recruiter || !(await bcrypt.compare(password, recruiter.password))) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ userId: recruiter._id }, 'SecreteKey(Should be changed)', { expiresIn: '1h' });

    res.status(200).json({ token });
};

// Create new Recruiter  
const createRecruiter = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.password, 13);
        const newRecruiter = new Recruiter({ ...req.body, password: hashedPassword });
        const savedRecruiter = await newRecruiter.save();

        res.status(201).json(savedRecruiter);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Update Recruiter using PATCH
const patchRecruiter = async (req, res) => {
    try {
        const recruiter = await Recruiter.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        if (!recruiter) {
            return res.status(404).json({ error: "Recruiter not found" });
        }

        res.json(recruiter);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Update Recruiter using PUT
const putRecruiter = async (req, res) => {
    try {
        const recruiter = await Recruiter.findOneAndReplace(
            { _id: req.params.id },
            req.body,
            { new: true }
        );

        if (!recruiter) {
            return res.status(404).json({ error: "Recruiter not found" });
        }

        res.json(recruiter);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Delete Recruiter by ID
const deleteRecruiter = async (req, res) => {
    try {
        const recruiter = await Recruiter.findByIdAndDelete(req.params.id);
        if (!recruiter) {
            return res.status(404).json({ error: "Recruiter not found" });
        }
        res.json({ message: "Recruiter deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    getAllRecruiters,
    getRecruiterById,
    createRecruiter,
    putRecruiter,
    patchRecruiter,
    deleteRecruiter,
    loginRecruiter
};