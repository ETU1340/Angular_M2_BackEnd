const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Student = require("./student.model");
let AssignmentSchema = new Schema({
  dateRendu: Date,
  name: String,
  isHanded: Boolean,
  student: {
    _id: String,
    name: String,
    profile: String,
  },
  subject: {
    _id: String,
    name: String,
    picture: String,
  },
  teacher: {
    _id: String,
    fullName: String,
    picture: String,
  },
  mark: Number,
  remark: String,
});

// Create and export the Assignment model
module.exports = mongoose.model("assignments", AssignmentSchema);
