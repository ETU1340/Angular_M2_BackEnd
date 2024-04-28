let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let SubjectSchema = new Schema({
  title: String,
  picture: String,
  teacher: {
    _id: String,
    fullName: String,
    picture: String,
  },
});
module.exports = mongoose.model("subjects", SubjectSchema);
