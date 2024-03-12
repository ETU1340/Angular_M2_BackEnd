let Assignment = require("../model/assignment.model");

// Récupérer tous les assignments (GET)
function getAssignments(req, res) {
  Assignment.find((err, assignments) => {
    if (err) {
      res.send(err);
    }
    res.send(assignments);
  });
}
