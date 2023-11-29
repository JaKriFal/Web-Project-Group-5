const uuid = require('uuid');
const Artist = require('../models/artists');
const bcrypt = require('bcrypt');

// Get All Artists
const getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.find();
        res.json(artists);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Get Single Artist by ID
const getArtistById = async (req, res) => {
    const artistId = req.params.id;

    try {
        const artist = await Artist.findById(artistId);

        if (!artist) {
            return res.status(404).json({ error: "Artist not found" });
        }

        res.json(artist);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Login 
const loginArtist = async (req, res) => {
    const { username, password } = req.body;
    const artist = await Artist.findOne({ username });

    if (!artist || !(await bcrypt.compare(password, artist.password))) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ userId: artist._id }, 'SecreteKey(Should be changed)', { expiresIn: '1h' });

    res.status(200).json({ token });
};

// Create new Artist  
const createArtist = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.password, 13);
        const newArtist = new Artist({ ...req.body, password: hashedPassword });
        const savedArtist = await newArtist.save();

        res.status(201).json(savedArtist);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Update Artist using PATCH
const patchArtist = async (req, res) => {
    try {
        const artist = await Artist.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        if (!artist) {
            return res.status(404).json({ error: "Artist not found" });
        }

        res.json(artist);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Update Artist using PUT
const putArtist = async (req, res) => {
    try {
        const artist = await Artist.findOneAndReplace(
            { _id: req.params.id },
            req.body,
            { new: true }
        );

        if (!artist) {
            return res.status(404).json({ error: "Artist not found" });
        }

        res.json(artist);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Delete Artist by ID
const deleteArtist = async (req, res) => {
    try {
        const artist = await Artist.findByIdAndDelete(req.params.id);
        if (!artist) {
            return res.status(404).json({ error: "Artist not found" });
        }
        res.json({ message: "Artist deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    getAllArtists,
    getArtistById,
    createArtist,
    putArtist,
    patchArtist,
    deleteArtist,
    loginArtist
};