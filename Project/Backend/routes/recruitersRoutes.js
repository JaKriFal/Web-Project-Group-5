const express = require('express');
const recruitersController = require('../controllers/recruitersController');
const router = express.Router();
const { checkRole } = require('../middleware/rolesMiddleware');

// Get All Recruiters
router.get('/', recruitersController.getAllRecruiters);

// Get Single Recruiter by ID
router.get('/:id', recruitersController.getRecruiterById);

// Create a New Recruiter
router.post('/', recruitersController.createRecruiter);

// Update Recruiter by ID
router.put('/:id', recruitersController.putRecruiter);

// Update Recruiter by ID using PATCH
router.patch('/:id', recruitersController.patchRecruiter);

// Delete Recruiter by ID
router.delete('/:id', recruitersController.deleteRecruiter);

module.exports = router;