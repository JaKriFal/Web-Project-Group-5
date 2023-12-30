const Recruiter = require("../models/recruiters");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

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

//Signup
const signupRecruiter = async (req, res) => {
  const { email, password, companyName } = req.body;

  try {
    const recruiter = await Recruiter.signup(email, password, companyName);
    console.log(recruiter);
    // create a token
    const token = createToken(recruiter._id);

    res.status(200).json({ email, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// Login
const loginRecruiter = async (req, res) => {
  const { email, password } = req.body;

  try {
    const recruiter = await Recruiter.login(email, password);

    // create a token
    const token = createToken(recruiter._id);

    res.status(200).json({ email, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// Create new Recruiter
const createRecruiter = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.password, 13);
    const newRecruiter = new Recruiter({
      ...req.body,
      password: hashedPassword,
    });
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
  loginRecruiter,
  signupRecruiter,
};
