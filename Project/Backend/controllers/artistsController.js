const uuid = require('uuid');
const artists = require('../models/artists');

// Get All Artists
const getAllArtists = (req, res) => {
    res.json(artists);
};

// Get Single Artist by ID
const getArtistById = (req, res) => {
    const found = artists.some((artist) => artist.id === parseInt(req.params.id));

    if (found) {
        res.json(artists.filter((artist) => artist.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No Artist with the id of ${req.params.id}` });
    }
};

const createArtist = (req, res) => {
    const newArtist = {
        id: uuid.v4(),
        ...req.body,
    };

    if (!newArtist.name || !newArtist.email) {
        return res.status(400).json({ msg: 'Please include a name and email and ...' });
    }

    artists.push(newArtist);
    res.json(artists);
};

const updateArtist = (req, res) => {
    const found = artists.some((artist) => artist.id === parseInt(req.params.id));

    if (found) {
        artists.forEach((artist, i) => {
            if (artist.id === parseInt(req.params.id)) {
                artists[i] = { ...artist, ...req.body };
                res.json({ msg: 'Artist updated', artist: artists[i] });
            }
        });
    } else {
        res.status(400).json({ msg: `No Artist with the id of ${req.params.id}` });
    }
};

const deleteArtist = (req, res) => {
    const found = artists.some((artist) => artist.id === parseInt(req.params.id));

    if (found) {
        const updatedArtists = artists.filter((artist) => artist.id !== parseInt(req.params.id));
        res.json({ msg: 'Artist deleted', artists: updatedArtists });
    } else {
        res.status(400).json({ msg: `No Artist with the id of ${req.params.id}` });
    }
};

module.exports = {
    getAllArtists,
    getArtistById,
    createArtist,
    updateArtist,
    deleteArtist,
};