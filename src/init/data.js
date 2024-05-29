const fs = require("fs");

const rawData = fs.readFileSync(
  "/home/tafinasoa/Study/angular-m2/Angular_M2_BackEnd/src/init/assignments.subjects.json"
);
const subjects = JSON.parse(rawData);

const s_rawData = fs.readFileSync(
  "/home/tafinasoa/Study/angular-m2/Angular_M2_BackEnd/src/init/assignments.students.json"
);
const students = JSON.parse(s_rawData);
const assignmentNames = [
  "Homework 1",
  "Project 2",
  "Lab Report 3",
  "Essay 4",
  "Research Paper 5",
  "Presentation 6",
  "Quiz 7",
  "Midterm 8",
  "Final Exam 9",
  "Group Project 10",
  "Homework 11",
  "Project 12",
  "Lab Report 13",
  "Essay 14",
  "Research Paper 15",
  "Presentation 16",
  "Quiz 17",
  "Midterm 18",
  "Final Exam 19",
  "Group Project 20",
];

function generateAssignments(n) {
  const assignments = [];
  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  for (let i = 0; i < n; i++) {
    const subject = subjects[randomInt(0, subjects.length - 1)];
    const teacher = subject.teacher;
    const student = students[randomInt(0, students.length - 1)];
    const dateRendu = new Date();
    dateRendu.setDate(dateRendu.getDate() + randomInt(-30, 30));

    const assignment = {
      dateRendu: dateRendu,
      isHanded: false,
      name: assignmentNames[i % assignmentNames.length], // Use the assignment name from the array
      student: {
        _id: student._id.$oid,
        name: `${student.name.first} ${student.name.last}`,
        profile: student.picture.large,
      },
      subject: {
        _id: subject._id.$oid,
        name: subject.title,
        picture: subject.picture,
      },
      teacher: {
        _id: teacher._id,
        fullName: teacher.fullName,
        picture: teacher.picture,
      },
    };

    if (Math.random() > 0.5) {
      assignment.mark = randomInt(1, 20);
      if (Math.random() > 0.5) {
        assignment.isHanded = true;
      }
    }

    if (assignment.isHanded && Math.random() > 0.5) {
      assignment.remark = `Remark for assignment ${i + 1}`;
    }

    assignments.push(assignment);
  }

  return assignments;
}

const generatedAssignments = generateAssignments(1000); // change the number to generate more assignments

fs.writeFileSync(
  "assignments.json",
  JSON.stringify(generatedAssignments, null, 2)
);

console.log("Assignments have been generated and saved to assignments.json");
