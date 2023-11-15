const uuid = require('uuid');
const recruiters = require('../models/recruiters');

// Get All Recruiters
const getAllRecruiters = (req, res) => {
    res.json(recruiters);
};

// Get Single Recruiter by ID
const getRecruiterById = (req, res) => {
    const found = recruiters.some((recruiter) => recruiter.id === parseInt(req.params.id));

    if (found) {
        res.json(recruiters.filter((recruiter) => recruiter.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No recruiter with the id of ${req.params.id}` });
    }
};

const createRecruiter = (req, res) => {
    const newRecruiter = {
        id: uuid.v4(),
        ...req.body,
    };

    if (!newRecruiter.name || !newRecruiter.email) {
        return res.status(400).json({ msg: 'Please include a name and email and ...' });
    }

    recruiters.push(newRecruiter);
    res.json(recruiters);
};

const updateRecruiter = (req, res) => {
    const found = recruiters.some((recruiter) => recruiter.id === parseInt(req.params.id));

    if (found) {
        recruiters.forEach((recruiter, i) => {
            if (recruiter.id === parseInt(req.params.id)) {
                recruiters[i] = { ...recruiter, ...req.body };
                res.json({ msg: 'Recruiter updated', recruiter: recruiters[i] });
            }
        });
    } else {
        res.status(400).json({ msg: `No recruiter with the id of ${req.params.id}` });
    }
};

const deleteRecruiter = (req, res) => {
    const found = recruiters.some((recruiter) => recruiter.id === parseInt(req.params.id));

    if (found) {
        const updatedRecruiter = recruiters.filter((recruiter) => recruiter.id !== parseInt(req.params.id));
        res.json({ msg: 'Recruiter deleted', recruiters: updatedRecruiter });
    } else {
        res.status(400).json({ msg: `No recruiter with the id of ${req.params.id}` });
    }
};

module.exports = {
    getAllRecruiters,
    getRecruiterById,
    createRecruiter,
    updateRecruiter,
    deleteRecruiter,
};