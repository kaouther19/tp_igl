const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/**
   c'est le schema de la note, qui représente les champs dans la base de donnée des notes d'un module obtenues par un étudiant.
   */
let Note = new Schema({
  /**
  Le matricule de  l'étudiant. 
  */
  note_matricule: {
    type: String
  },
  /**
   Le nom de module .
   */
  note_module: {
    type: String
  },
  /**
 La note de controle contenu obtenue par l'étudiant. 
 */
  note_cc: {
    type: Number
  },
  /**
La note de controle intermédiare obtenue par l'étudiant.
*/
  note_ci: {
    type: Number
  },
  /**
La note de controle final obtenue par l'étudiant.
*/
  note_cf: {
    type: Number
  }
});

module.exports = mongoose.model("Note", Note);
