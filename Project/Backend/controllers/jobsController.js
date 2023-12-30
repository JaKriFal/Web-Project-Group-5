const Job = require("../models/jobs");
const Recruiter = require("../models/recruiters");
const Artist = require("../models/artists");
const mongoose = require("mongoose");

// get all jobs
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get recruiter's jobs
const getRecruitersJobs = async (req, res) => {
  try {
    const recruiterId = req.user._id;
    const jobs = await Job.find({ recruiterId });
    res.status(200).json(jobs);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get artist's saved jobs
const getArtistsJobs = async (req, res) => {
  try {
    const artistId = req.user._id;
    const artist = await Artist.findById(artistId);

    if (!artist) {
      return res.status(404).json({ error: "Artist not found" });
    }

    const savedJobsIds = artist.savedJobs || [];
    const savedJobs = await Job.find({ _id: { $in: savedJobsIds } });

    res.status(200).json(savedJobs);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get a single job
const getJob = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such Job" });
    }

    const job = await Job.findById(id);

    if (!job) {
      return res.status(404).json({ error: "No such Job" });
    }

    res.status(200).json(job);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// crete a job
const createJob = async (req, res, next) => {
  const { position, description, skills, location, type, medium, tags } =
    req.body;
  const userId = "0"; // remove "0" and place "req.user._id" once login is done

  try {
    const job = await Job.create({
      recruiterId: userId,
      position: position,
      description: description,
      skills: skills,
      location: location,
      type: type,
      medium: medium,
      tags: tags.split(","),
    });
    res.status(201).json({
      id: job._id,
      position: job.position,
      description: job.description,
      skills: job.skills,
      location: job.location,
      type: job.type,
      medium: job.medium,
      tags: job.tags,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// delete a Job
const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such job" });
    }

    const job = await Job.findByIdAndDelete({ _id: id });
    res.status(200).json({ job, message: "Job deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// update a job
const updateJob = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such job" });
    }

    const job = await Job.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );

    if (!job) {
      return res.status(400).json({ error: "No such job" });
    }

    res.status(200).json(job);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllJobs,
  getRecruitersJobs,
  getArtistsJobs,
  getJob,
  createJob,
  deleteJob,
  updateJob,
};
