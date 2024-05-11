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

// Récupérer tous les assignments (GET)
function getAssignmentNotReturned(req, res) {
  Assignment.find({ rendu: false }, (err, assignments) => {
    if (err) {
      res.send(err);
    }
    res.send(assignments);
  });
}

function getAssignmentReturned(req, res) {
  Assignment.find({ rendu: true }, (err, assignments) => {
    if (err) {
      res.send(err);
    }
    res.send(assignments);
  });
}

// Récupérer un assignment par son id (GET)
function getAssignment(req, res) {
  let assignmentId = req.params.id;
  Assignment.findById(assignmentId, (err, assignment) => {
    if (err) {
      res.send(err);
    }
    res.json(assignment);
  });
}

// Ajout d'un assignment (POST)
function postAssignment(req, res) {
  console.log(req.body);
  let assignment = new Assignment(req.body);

  console.log("POST assignment reçu :");
  console.log(assignment);

  assignment.save((err) => {
    if (err) {
      res.send("can't post assignment ", err);
    }
    res.json({ message: `${req.body.name} saved with id : ${assignment._id}` });
  });
}

// Update d'un assignment (PUT)
function updateAssignment(req, res) {
  console.log("UPDATE recu assignment : ");
  console.log(req.body);
  Assignment.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true },
    (err, assignment) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.json({ message: "updated" });
      }

      // console.log('updated ', assignment)
    }
  );
}

// suppression d'un assignment (DELETE)
// l'id est bien le _id de mongoDB
function deleteAssignment(req, res) {
  Assignment.findByIdAndRemove(req.params.id, (err, assignment) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: `${assignment.nom} deleted` });
  });
}

module.exports = {
  getAssignments,
  postAssignment,
  getAssignment,
  getAssignmentNotReturned,
  getAssignmentReturned,
  updateAssignment,
  deleteAssignment,
};