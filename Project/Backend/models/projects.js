const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  data: Buffer,
  contentType: String,
  caption: String,
});

const projectItemSchema = new Schema({
  artistId: String,
  title: String,
  images: [imageSchema],
  description: String,
  tags: [String],
});

const Project = mongoose.model('Project', projectItemSchema);
module.exports = Project;