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
  const page = parseInt(req.query.page) || 1;

  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;


  Assignment.find({ isHanded: false })
    .skip(skip)
    .limit(limit)
    .exec((err, assignments) => {
      if (err) {
        return res.status(500).send(err);
      }

      Assignment.countDocuments({ isHanded: false }, (err, count) => {
        if (err) {
          return res.status(500).send(err);
        }
        const totalPages =  Math.ceil(count / limit);
        const nextPage = page < totalPages ? page + 1 : null;
        const hasNextPage = page < totalPages;
        res.send({
          assignments:assignments,
          totalPages: Math.ceil(count / limit),
          nextPage:nextPage,
          hasNextPage:hasNextPage,
          currentPage: page,
        });
      });
    });
}

function getAssignmentReturned(req, res) {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  Assignment.find({ isHanded: true })
    .skip(skip)
    .limit(limit)
    .exec((err, assignments) => {
      if (err) {
        return res.status(500).send(err);
      }

      Assignment.countDocuments({ isHanded: true }, (err, count) => {
        if (err) {
          return res.status(500).send(err);
        }
        const totalPages =  Math.ceil(count / limit);
        const nextPage = page < totalPages ? page + 1 : null;
        const hasNextPage = page < totalPages;
        res.send({
          assignments:assignments,
          totalPages: Math.ceil(count / limit),
          nextPage:nextPage,
          hasNextPage:hasNextPage,
          currentPage: page,
        });
      });
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
  let assignment = new Assignment(req.body);

  assignment.save((err) => {
    if (err) {
      res.send("can't post assignment ", err);
    }
    res.json({ message: `${req.body.name} saved with id : ${assignment._id}` });
  });
}

function updateAssignment(req, res) {
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


async function searchAssignmentReturned(req, res) {
  const searchTerm = req.query.name;
  if (!searchTerm) {

    return res.status(400).send('Un terme de recherche est requis');
  }
  const regex = new RegExp(searchTerm, 'i'); // 'i' pour insensible à la casse
  const results = await Assignment.find({ name: { $regex: regex },isHanded: true });

  return res.status(200).json(results);
}

async function searchAssignmentNotReturned(req, res) {
  const searchTerm = req.query.name;
  const regex = new RegExp(searchTerm, 'i'); // 'i' pour insensible à la casse
  const results = await Assignment.find({ name: { $regex: regex },isHanded: false });

  return res.status(200).json(results);
}

async function getStat(req, res) {
  const results = await Assignment.aggregate([
    {
      $facet: {
        noMark: [{ $match: { mark: { $exists: false } } }, { $count: "count" }],
        withMark: [
          { $match: { mark: { $exists: true }, isHanded: false } },
          { $count: "count" },
        ],
        markHanded: [
          { $match: { mark: { $exists: true }, isHanded: true } },
          { $count: "count" },
        ]
      },
    },
  ]);

  const noMarkCount = results[0].noMark.length ? results[0].noMark[0].count : 0;
  const withMarkCount = results[0].withMark.length
    ? results[0].withMark[0].count
    : 0;
  const markHandedCount = results[0].markHanded.length
    ? results[0].markHanded[0].count
    : 0;

  console.log(`Documents with no mark: ${noMarkCount}`);
  console.log(`Documents with a mark: ${withMarkCount}`);
  console.log(
    `Documents with a mark and handed is true: ${markHandedCount}`
  );
  return res.status(200).json({
    noMark: noMarkCount,
    withMark: withMarkCount,
    markedHanded: markHandedCount,
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
  getStat,
  searchAssignmentReturned,
  searchAssignmentNotReturned
};
