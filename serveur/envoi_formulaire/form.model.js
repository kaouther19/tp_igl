const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Formulaire = new Schema({
  formulaire_grpA: {
    type: Number
  },
  formulaire_grpV: {
    type: Number
  },
  formulaire_raison: {
    type: String
  }
});

module.exports = mongoose.model("Formulaire", Formulaire);
