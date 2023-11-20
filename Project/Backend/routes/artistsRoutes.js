const express = require('express');
const artistsController = require('../controllers/artistsController');
const router = express.Router();

// Get All artists
router.get('/', artistsController.getAllArtists);

// Get Single Artist by ID
router.get('/:id', artistsController.getArtistById);

// Create a New Artist
router.post('/', artistsController.createArtist);

// Update Artist by ID using PUT
router.put('/:id', artistsController.putArtist);

// Update Artist by ID using PATCH
router.patch('/:id', artistsController.patchArtist);

// Delete Artist by ID
router.delete('/:id', artistsController.deleteArtist);

module.exports = router;