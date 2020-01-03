const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/** Formulaire le schema du formulaire, qui représente les champs d'un formulaire dans la base de donnée. */
let Formulaire = new Schema({
  /**
   * LE matricule de l'étudiant
   */
  formulaire_matricule: {
    /** @type {String} */
    type: String
  },
  /**
   * Le groupe actuel de l'étudiant.
   */
  formulaire_grpA: {
    /** @type {Number} */
    type: Number
  },
  /**
   * Le groupe que l'étudiant veut.
   */

  formulaire_grpV: {
    /** @type {Number} */
    type: Number
  },
  /**
   * La raison de changement donnée par l'étudiant.
   */
  formulaire_raison: {
    /** @type {String} */
    type: String
  }
});

module.exports = mongoose.model("Formulaire", Formulaire);
