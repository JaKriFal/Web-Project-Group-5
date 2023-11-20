const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  position: String,
  locations: [String],
  type: String,
  tags: [String],
  description: String,
});

const recruiterSchema = new Schema({
  companyName: String,
  companyIcon: String,
  email: String,
  password: String,
  savedArtists: [String],
  recruitmentStatus: Boolean,
  jobs: [jobSchema],
});

// Create and export the model
const Recruiter = mongoose.model('Recruiter', recruiterSchema);
module.exports = Recruiter;


/*const recruiters = [
  {
    "companyName": "Lexcorp",
    "companyIcon": "./src",
    "email": "something@something.com",
    "password": "1234",
    "savedArtists": ["some artist", "other artist"],
    "recruitmentStatus": true,
    "jobs":
      [
        {
          "position": "Lead Concept Artist",
          "locations": ["France", "Finland", "Ireland", "Remote"],
          "type": "Permanent",
          "tags": ["Games", "Animation"],
          "description": "I need good men...",
        },
        {
          "position": "Level Artist",
          "locations": ["France", "Finland", "Ireland", "Remote"],
          "type": "Permanent",
          "tags": ["Games", "Animation"],
          "description": "I need good men...",
        },
      ],
  }
];*/