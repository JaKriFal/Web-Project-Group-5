const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobItemSchema = new Schema({
    recruiterId: String,
    position: String,
    description: String,
    skills: String,
    location: String,
    type: String,
    medium: String,
    tags: [String],
});

const Job = mongoose.model('Job', jobItemSchema);
module.exports = Job;