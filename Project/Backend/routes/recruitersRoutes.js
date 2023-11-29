const express = require('express');
const recruitersController = require('../controllers/recruitersController');
const router = express.Router();
const { checkRole } = require('../middleware/rolesMiddleware');
const authenticateToken = require('../middleware/authMiddleware');

// Get All Recruiters
router.get('/', recruitersController.getAllRecruiters);

// Get Single Recruiter by ID
router.get('/:id', recruitersController.getRecruiterById);

// Create a New Recruiter
router.post('/', authenticateToken, recruitersController.createRecruiter);

// Update Recruiter by ID
router.put('/:id', authenticateToken, recruitersController.putRecruiter);

// Update Recruiter by ID using PATCH
router.patch('/:id', authenticateToken, recruitersController.patchRecruiter);

// Delete Recruiter by ID
router.delete('/:id', authenticateToken, recruitersController.deleteRecruiter);

// Login
router.post('/login', recruitersController.loginRecruiter);


module.exports = router;