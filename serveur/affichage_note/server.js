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

mongoose.connect("mongodb://127.0.0.1:27017/tp_igl", { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB databese connection established successfully ");
});
noteRoutes.route("/").get(function(req, res) {
  Note.find(function(err, notes) {
    if (err) {
      console.log(err);
    } else {
      res.json(notes);
    }
  });
});
noteRoutes.route("/:note_module").get(function(req, res) {
  Note.find({ note_module: req.params.note_module }, function(err, notes) {
    if (err) {
      console.log(err);
    } else {
      res.json(notes);
    }
  });
});
/* noteRoutes.route("/add").post(function(req, res) {
  let note = new Note(req.boyd);
  note
    .save()
    .then(note => {
      res.status(200).json({ note: " added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding new note failed");
    });
}); */
app.use("/notes", noteRoutes);
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
