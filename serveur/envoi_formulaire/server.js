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

mongoose.connect("mongodb://127.0.0.1:27017/tp_igl", { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB databese connection established successfully ");
});
/** API utilisé pour ajouter un formulaire à la base de donnée */
formRoutes.route("/add").post(function(req, res) {
  let form = new Formulaire(req.body);
  form
    .save()
    .then(form => {
      res.status(200).json({ form: " added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding new note failed");
    });
});
app.use("/formulaires", formRoutes);
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
