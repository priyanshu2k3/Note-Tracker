const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
  title:  String,
  author: String,
  des:   String,
  tag:    String,
  date: { type: Date, default: Date.now },
});

var Note =  new mongoose.model('Note', noteSchema);

module.exports = Note; 