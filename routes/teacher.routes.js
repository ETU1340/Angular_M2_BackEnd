let Teacher = require("../model/teacher.model");

// Récupérer tous les assignments (GET)
function checkConnection(req, res) {
  const name = req.body.name;
  const mdp = req.body.mdp;
  Teacher.findOne({ name: name, mdp: mdp }, (err, teacher) => {
    if (teacher) {
      res.send(teacher);
    } else {
      res.send(false);
    }
  });
}

module.exports = {
  checkConnection,
};
