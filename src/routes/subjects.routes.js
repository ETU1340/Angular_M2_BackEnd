let Subject = require("./../model/subject.model");
async function getSubjects(req, res) {
  try {
    const subject = await Subject.find();
    return res.status(200).json(subject);
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
}

module.exports = {
  getSubjects,
};
