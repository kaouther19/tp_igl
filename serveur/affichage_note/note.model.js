const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Note = new Schema({
  note_module: {
    type: String
  },
  note_cc: {
    type: Number
  },
  note_ci: {
    type: Number
  },
  note_cf: {
    type: Number
  }
});

module.exports = mongoose.model("Note", Note);
