const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;
let Note = require("./note.model");
const noteRoutes = express.Router();
app.use(cors());
app.use(bodyParser.json());

//mongoose.connect("mongodb://mongo:27017/tp_igl", { utilisé pour docker
mongoose.connect("mongodb://127.0.0.1:27017/tp_igl", {
  useNewUrlParser: true,
  useCreateIndex: true
});
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB databese connection established successfully ");
});
/*
 *API qui récupère la liste des notes de la base de donnée
 */

noteRoutes.route("/").get(function(req, res) {
  Note.find(function(err, notes) {
    if (err) {
      console.log(err);
    } else {
      res.json(notes);
    }
  });
});
/**
 * API qui récupere l'ensemble des notes d'un étudiant dans le module note_module utilisé pour le teste unitaire.
 */
noteRoutes.route("/:note_matricule").get(function(req, res) {
  Note.find({ note_matricule: req.params.note_matricule }, function(
    err,
    notes
  ) {
    if (err) {
      console.log(err);
    } else {
      res.json(notes);
    }
  });
});
/**
 * API qui ajoute l'ensemble des notes d'un étudiant dans le module note_module utilisé pour le test.
 */
noteRoutes.route("/add").post(function(req, res) {
  const body = req.body;
  const note = new Note({
    note_matricule: body.note_matricule,
    note_module: body.note_module,
    note_cc: body.note_cc,
    note_ci: body.note_ci,
    note_cf: body.note_cf
  });
  note
    .save(note)
    .then(note => {
      res.status(200).send(note);
    })
    .catch(err => {
      res.status(400).send("adding new note failed");
    });
});
app.use("/notes", noteRoutes);
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

module.exports = app;
