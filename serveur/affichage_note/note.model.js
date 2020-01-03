const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/**
 * @property {Schema}
 * Note le schema de la note, qui représente les champs dans la base de donnée des notes d'un module obtenues par un étudiant.
 */
let Note = new Schema({
  /**
   * Le matricule de  l'étudiant.
  
   */
  note_matricule: {
    /**
     * @type {String}
     * */
    type: String
  },
  /**
   * Le nom de module .
   */
  note_module: {
    /**
     * @type {String}
     */
    type: String
  },
  /**
   * La note de controle contenu obtenue par l'étudiant.
   
   */
  note_cc: {
    /**
     *  @type {Number}
     */
    type: Number
  },
  /**
   * La note de controle intermédiare obtenue par l'étudiant.
   */
  note_ci: {
    /**
     *  @type {Number} */
    type: Number
  },
  /**
   * La note de controle final obtenue par l'étudiant.
   */
  note_cf: {
    /**
     *  @type {Number} */
    type: Number
  }
});

module.exports = mongoose.model("Note", Note);
