const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectItemSchema = new Schema({
  artistId: String,
  title: String,
  images: [String],
  description: String,
  tags: [String],
});

const Project = mongoose.model('Project', projectItemSchema);
module.exports = Project;