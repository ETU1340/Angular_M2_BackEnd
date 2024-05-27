let express = require("express");
let expressListRoutes = require("express-list-routes");
let app = express();
let bodyParser = require("body-parser");
let assignmentRts = require("./routes/assignments.routes");
let teacherRts = require("./routes/teacher.routes");
let studentsRts = require("./routes/students.routes");
let subjectRts = require("./routes/subjects.routes");
let mongoose = require("mongoose");
const { initTeacher, initSubject } = require("./init");

mongoose.Promise = global.Promise;
// mongoose.set('debug', true);
const uri =
  "mongodb+srv://labstudy830:AqFmwwGWI7WP75DR@cluster0.kxj5gal.mongodb.net/assignments?retryWrites=true&w=majority&appName=Cluster0";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect(uri, options).then(
  () => {
    console.log("Connecté à la base MongoDB assignments dans le cloud !");
    // insertStudents();
  },
  (err) => {
    console.log("Erreur de connexion: ", err);
  }
);

// Pour accepter les connexions cross-domain (CORS)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Pour les formulaires
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8010;

// les routes
const prefix = "/api";

// http://serveur..../assignments
app
  .route(prefix + "/assignments")
  .post(assignmentRts.postAssignment)
  .put(assignmentRts.updateAssignment)
  .get(assignmentRts.getAssignments);

app
  .route(prefix + "/assignmentNotReturned")
  .get(assignmentRts.getAssignmentNotReturned);
app
  .route(prefix + "/assignmentReturned")
  .get(assignmentRts.getAssignmentReturned);

app
  .route(prefix + "/assignments/:id")
  .get(assignmentRts.getAssignment)
  .delete(assignmentRts.deleteAssignment);

app.route(prefix + "/teachers").post(teacherRts.checkConnection);

app.route(prefix + "/students").get(studentsRts.getStudents);
app.route(prefix + "/subjects").get(subjectRts.getSubjects);

app.route(prefix + "/stat").get(assignmentRts.getStat);
app.route(prefix + "/searchReturned").get(assignmentRts.searchAssignmentReturned);
app.route(prefix + "/searchNotReturned").get(assignmentRts.searchAssignmentNotReturned);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  expressListRoutes(app);
});

console.log("Serveur démarré sur http://localhost:" + port);

module.exports = app;
