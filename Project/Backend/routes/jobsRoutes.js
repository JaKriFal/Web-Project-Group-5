const express = require('express');
const jobsController = require('../controllers/jobsController');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

// Create a New Job
router.post("/", authenticateToken, jobsController.createJob);

// Get All Jobs
router.get('/', jobsController.getAllJobs);

// Get artist's Jobs
router.get('/artistsJobs', authenticateToken, jobsController.getArtistsJobs);

// Get recruiter's Jobs
router.get('/recruitersJobs', authenticateToken, jobsController.getRecruitersJobs);

// Get Single Job by ID
router.get('/:id', jobsController.getJob);

// Update Job by ID
router.put('/:id', authenticateToken, jobsController.updateJob);

// Delete Job by ID
router.delete('/:id', authenticateToken, jobsController.deleteJob);

module.exports = router;