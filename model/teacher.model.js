let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TeacherSchema = new Schema({
  id: Number,
  subject: String,
  name: String,
  firstName: String,
  mdp: String,
  picture: String,
  isAdmin: Boolean,
});
module.exports = mongoose.model("teachers", TeacherSchema);
