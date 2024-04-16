const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Assignment schema
const AssignmentSchema = new Schema({
  id: Number,
  dateDeRendu: Date,
  nom: String,
  rendu: Boolean,
});

// Create and export the Assignment model
module.exports = mongoose.model("assignments", AssignmentSchema);
