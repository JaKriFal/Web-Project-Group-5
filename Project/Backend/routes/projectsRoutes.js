const express = require('express');
const projectsController = require('../controllers/projectsController');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

// Get All Projects
router.get('/', authenticateToken, projectsController.getAllProjects);

// Get artist's Projects
router.get('/artistsProjects', authenticateToken, projectsController.getArtistsProjects);

// Get recruiter's Projects
router.get('/recruitersProjects', authenticateToken, projectsController.getRecruitersProjects);

// Get Single Project by ID
router.get('/:id', authenticateToken, projectsController.getProject);

// Create a New Recruiter
router.post('/', authenticateToken, projectsController.createProjectWithMulter);

// Update Recruiter by ID
router.put('/:id', authenticateToken, projectsController.updateProject);

// Delete Recruiter by ID
router.delete('/:id', authenticateToken, projectsController.deleteProject);

module.exports = router;