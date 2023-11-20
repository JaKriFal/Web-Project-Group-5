const mongoose = require('mongoose');

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