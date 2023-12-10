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

//Signup
const signupArtist = async (req, res) => {
    const { email, password, username } = req.body

    try {
        const artist = await Artist.signup(email, password, username)

        // create a token
        const token = createToken(artist._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

// Login 
const loginArtist = async (req, res) => {
    const { email, password } = req.body

    try {
        const artist = await Artist.login(email, password)

        // create a token
        const token = createToken(artist._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
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
    loginArtist,
    signupArtist
};