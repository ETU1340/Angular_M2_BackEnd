let Assignment = require("../model/assignment.model");

async function getAssignments(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const startIndex = (page - 1) * limit;

    const totalDocs = await Assignment.countDocuments().exec();
    const totalPages = Math.ceil(totalDocs / limit);

    const aggregateQuery = Assignment.aggregate([
      // Your aggregation stages here
      // Example:
      // { $match: { ... }},
      // { $group: { ... }},
    ]);

    const assignments = await aggregateQuery
      .skip(startIndex)
      .limit(limit)
      .exec();

    const nextPage = page < totalPages ? page + 1 : null;
    const prevPage = page > 1 ? page - 1 : null;

    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    res.json({
      assignments: assignments,
      totalDocs: totalDocs,
      totalPages: totalPages,
      nextPage: nextPage,
      prevPage: prevPage,
      hasNextPage: hasNextPage,
      hasPrevPage: hasPrevPage,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

function getAssignmentNotReturned(req, res) {
  Assignment.find({ isHanded: false }, (err, assignments) => {
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

function getAssignment(req, res) {
  let assignmentId = req.params.id;
  Assignment.findById(assignmentId, (err, assignment) => {
    if (err) {
      res.send(err);
    }
    res.json(assignment);
  });
}

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

function updateAssignment(req, res) {
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
    }
  );
}

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
