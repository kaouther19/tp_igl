const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 5000;
let Formulaire = require("./form.model");
const formRoutes = express.Router();
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
/** API utilisé pour ajouter un formulaire à la base de donnée */
formRoutes.route("/add").post(function(req, res) {
  const body = req.body;
  const form = new Formulaire({
    formulaire_matricule: body.formulaire_matricule,
    formulaire_grpA: body.formulaire_grpA,
    formulaire_grpV: body.formulaire_grpV,
    formulaire_raison: body.formulaire_raison
  });
  form
    .save(form)
    .then(form => {
      res.status(200).send(form);
    })
    .catch(err => {
      res.status(400).send("adding new note failed");
    });
});
app.use("/formulaires", formRoutes);
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
module.exports = app;
