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


// create new project
const createProject = async (req, res) => {
    try {

        const { title, description, tags } = req.body;
        const userId = req.user._id;
        if (!req.file) {
            return res.status(400).json({ error: 'Image file is required' });
        }

        const newProject = new Project({
            artistId: userId,
            title: title,
            description: description,
            tags: tags,
            images: [{
                data: req.file.buffer,
                contentType: req.file.mimetype,
                caption: req.file.originalname,
            }],
        });

        const savedProject = await newProject.save();

        res.status(200).json(savedProject);
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createProjectWithMulter = async (req, res) => {
    uploadMiddleware(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({ error: 'File upload error' });
        } else if (err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        createProject(req, res);
    });
};

// delete a project
const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such project' });
        }

        const project = await Project.findOneAndDelete({ _id: id });

        if (!project) {
            return res.status(400).json({ error: 'No such project' });
        }

        res.status(200).json(project);
    } catch {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

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
    createProjectWithMulter,
    deleteProject,
    updateProject
}