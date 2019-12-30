const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/** c'est le schema du formulaire, qui représente les champs d'un formulaire dans la base de donnée */
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
