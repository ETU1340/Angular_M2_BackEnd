const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let AssignmentSchema = new Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    note: Number,
    remark:String,
    rendu: Boolean
});

// Create and export the Assignment model
module.exports = mongoose.model("assignments", AssignmentSchema);
