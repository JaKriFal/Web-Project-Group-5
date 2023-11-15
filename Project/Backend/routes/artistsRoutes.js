const express = require('express');
const artistsController = require('../controllers/artistsController');
const router = express.Router();

// Get All artists
router.get('/', artistsController.getAllArtists);

// Get Single Tour by ID
router.get('/:id', artistsController.getArtistById);

// Create a New Tour
router.post('/', artistsController.createArtist);

// Update Tour by ID
router.put('/:id', artistsController.updateArtist);

// Delete Tour by ID
router.delete('/:id', artistsController.deleteArtist);

module.exports = router;