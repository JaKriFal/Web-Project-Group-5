const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

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
  savedProjects: [String],
  recruitmentStatus: Boolean,
  jobs: [jobSchema],
});

recruiterSchema.statics.signup = async function (email, password, companyName) {
  if (!email || !password || !companyName) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(13);
  const hash = await bcrypt.hash(password, salt);

  const recruiter = await this.create({ email, password: hash, companyName });

  return recruiter;
};

recruiterSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const recruiter = await this.findOne({ email });
  if (!recruiter) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, recruiter.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return recruiter;
};

// Create and export the model
const Recruiter = mongoose.model("Recruiter", recruiterSchema);
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
