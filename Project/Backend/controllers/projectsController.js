const Project = require('../models/projects')
const Recruiter = require('../models/recruiters')
const mongoose = require('mongoose')
const multer = require('multer');

// Set up Multer for handling file uploads
const storage = multer.memoryStorage(); // Store files in memory as buffers
const upload = multer({ storage: storage });
const uploadMiddleware = upload.single('image');

// get all projects
const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// get artist's projects
const getArtistsProjects = async (req, res) => {
    try {
        const artistId = req.user._id;
        const projects = await Project.find({ artistId });
        res.status(200).json(projects);
    } catch {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// get recruiter's saved projects
const getRecruitersProjects = async (req, res) => {
    try {
        const recruiterId = req.user._id;
        const recruiter = await Recruiter.findById(recruiterId);

        if (!recruiter) {
            return res.status(404).json({ error: "Recruiter not found" });
        }

        const savedProjectIds = recruiter.savedProjects || [];
        const savedProjects = await Project.find({ _id: { $in: savedProjectIds } });

        res.status(200).json(savedProjects);
    } catch {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// get a single project
const getProject = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such project' });
        }

        const project = await Project.findById(id);

        if (!project) {
            return res.status(404).json({ error: 'No such project' });
        }

        res.status(200).json(project);
    } catch {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// crete a project
const createProject = async (req, res, next) => {
    const { title, description, tags } = req.body;
    const userId = "0"; // remove "0" and place "req.user._id" once login is done 

    const images = req.files ? req.files.images.map((file) => file.filename) : [];
    const thumbnail = req.files.thumbnail[0].filename;

    try {
        const project = await Project.create({
            artistId: userId,
            title: title,
            description: description,
            tags: tags.split(','),
            images: images,
            thumbnail: thumbnail
        });
        res.status(201).json({
            id: project._id,
            artistId: project.adtistId,
            title: project.title,
            description: project.description,
            tags: project.tags,
            images: project.images,
            thumbnail: project.thumbnail
        });
    } catch (error) {
        if (error.name === "ValidationError") {
        /*validation error like invalid email*/ return res
                .status(400)
                .json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

// delete a project
const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such project' });
        }

        const project = await Project.findById({ _id: id });
        if (project) {
            project.images.forEach((image) => {
                fs.unlinkSync(`Frontend/artsite-front/public/uploads/${image}`);
            });
            project.thumbnail &&
                fs.unlinkSync(`Frontend/artsite-front/public/uploads/${project.thumbnail}`);
            await project.remove();
            res.status(201).json({ message: "Project removed" });
        } else {
            res.status(404).json({ error: "Project not found" });
        }
    } catch {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// update a project
const updateProject = async (req, res) => {
    try {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such project' })
        }

        const project = await Project.findOneAndUpdate({ _id: id }, {
            ...req.body
        })

        if (!project) {
            return res.status(400).json({ error: 'No such project' })
        }

        res.status(200).json(project)
    } catch {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = {
    getAllProjects,
    getArtistsProjects,
    getRecruitersProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject
}