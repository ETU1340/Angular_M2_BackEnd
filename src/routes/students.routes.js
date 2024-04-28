let Student = require("../model/student.model");

async function insertStudents() {
  const students = [];
  try {
    for (const studentData of students) {
      const student = new Student(studentData);
      await student.save();
    }
    console.log("Students inserted successfully.");
  } catch (error) {
    console.error("Error inserting students:", error);
  }
}

async function getStudents(req, res) {
  try {
    const students = await Student.find();
    return res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
}

module.exports = {
  insertStudents,
  getStudents,
};
