const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/** c'est le schema du formulaire, qui représente les champs d'un formulaire dans la base de donnée. */
let Formulaire = new Schema({
  /**
   * LE matricule de l'étudiant
   * @type : String
   */
  formulaire_matricule: {
    type: String
  },
  /**
   * Le groupe actuel de l'étudiant.
   * @type : Number
   */
  formulaire_grpA: {
    type: Number
  },
  /**
   * Le groupe que l'étudiant veut.
   * @type : Number
   */

  formulaire_grpV: {
    type: Number
  },
  /**
   * La raison de changement donnée par l'étudiant.
   * @type : String
   */
  formulaire_raison: {
    type: String
  }
});

module.exports = mongoose.model("Formulaire", Formulaire);
