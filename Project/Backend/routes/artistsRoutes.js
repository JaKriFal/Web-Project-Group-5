const express = require('express');
const artistsController = require('../controllers/artistsController');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

// Get All artists
router.get('/', artistsController.getAllArtists);

// Get Single Artist by ID
router.get('/:id', artistsController.getArtistById);

// Create a New Artist
router.post('/', authenticateToken, artistsController.createArtist);

// Update Artist by ID using PUT
router.put('/:id', authenticateToken, artistsController.putArtist);

// Update Artist by ID using PATCH
router.patch('/:id', authenticateToken, artistsController.patchArtist);

// Delete Artist by ID
router.delete('/:id', authenticateToken, artistsController.deleteArtist);

// Login
router.post('/login', artistsController.loginArtist);

module.exports = router;