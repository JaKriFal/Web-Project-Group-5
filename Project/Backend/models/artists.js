const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  src: String,
  caption: String,
});

const portfolioItemSchema = new Schema({
  title: String,
  image1: imageSchema,
  image2: imageSchema,
  description: String,
  tags: [String],
});

const artistSchema = new Schema({
  username: String,
  userIcon: String,
  email: String,
  password: String,
  savedJobs: [String],
  portfolio: [portfolioItemSchema],
});

artistSchema.statics.signup = async function (email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(13)
  const hash = await bcrypt.hash(password, salt)

  const artist = await this.create({ email, password: hash })

  return artist
};

artistSchema.static.login = async function (email, password) {
  
  if (!email || !password){
    throw Error('All fields must be filled')
  }

  const artist = await this.findOne({email});
  if (!artist){
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(artist.password, password);
  if (!match){
    throw Error('Incorrect password')
  }

  return artist;
};

// Create and export the model
const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;




/*const artists = [
  {
    "id": 1,
    "username": "someone",
    "user-icon": "./src",
    "email": "something@something.com",
    "password": "1234",
    "saved-jobs": ["some company", "other company"],
    "portfolio": [
      {
        "title": "Title",
        "image-1":
        {
          "src": "./src",
          "caption": "Whatever"
        },
        "image-2":
        {
          "src": "./src",
          "caption": "Whatever"
        },
        "description": "Put some text here",
        "tags": ["Digital 2D", "Animation"],
      },
      {
        "title": "Title",
        "image-1":
        {
          "src": "./src",
          "caption": "Whatever"
        },
        "image-2":
        {
          "src": "./src",
          "caption": "Whatever"
        },
        "description": "Put some text here",
        "tags": ["Digital 3D", "Animation"],
      },
    ],
  },
  {
    "id": 2,
    "username": "someone",
    "user-icon": "./src",
    "email": "something@something.com",
    "password": "1234",
    "saved-jobs": ["some company", "other company"],
    "portfolio": [
      {
        "title": "Title",
        "image-1":
        {
          "src": "./src",
          "caption": "Whatever"
        },
        "image-2":
        {
          "src": "./src",
          "caption": "Whatever"
        },
        "description": "Put some text here",
        "tags": ["Digital 2D", "Animation"],
      },
      {
        "title": "Title",
        "image-1":
        {
          "src": "./src",
          "caption": "Whatever"
        },
        "image-2":
        {
          "src": "./src",
          "caption": "Whatever"
        },
        "description": "Put some text here",
        "tags": ["Digital 3D", "Animation"],
      },
    ],
  }
];*/