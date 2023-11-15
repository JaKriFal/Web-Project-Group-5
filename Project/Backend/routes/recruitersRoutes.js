const express = require('express');
const recruitersController = require('../controllers/recruitersController');
const router = express.Router();
const { checkRole } = require('../middleware/rolesMiddleware');

// Get All Users
router.get('/', recruitersController.getAllRecruiters);

// Get Single User by ID
router.get('/:id', recruitersController.getRecruiterById);

// Create a New User
router.post('/', recruitersController.createRecruiter);

// Update User by ID
router.put('/:id', recruitersController.updateRecruiter);

// Delete User by ID
router.delete('/:id', recruitersController.deleteRecruiter);

module.exports = router;