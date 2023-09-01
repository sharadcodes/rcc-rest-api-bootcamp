const crypto = require("crypto");

let students = [
  {
    id: crypto.randomUUID(),
    name: "Stephen Hawkins",
  },
];

function getStudents(req, res) {
  return res.status(200).json(students);
}

function getStudentById(req, res) {
  const id = req.params.id;
  // const className = req.params.className;
  // const roll_no = req.params.roll_no;
  // const { id, className, roll_no } = req.params;
  let student = null;
  for (let i = 0; i < students.length; i++) {
    if (students[i].id == id) {
      student = students[i];
      break;
    }
  }
  if (student == null) {
    return res.status(404).json({
      error: "Student not found",
    });
  } else {
    return res.status(200).json(student);
  }
}

function createStudent(req, res) {
  const name = req?.body?.name;
  // const name = req?.headers?.name;
  // const name = req?.params?.name;
  // const name = req?.query?.name;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  students.push({
    id: crypto.randomUUID(),
    name: name,
  });
  return res.status(201).json({
    message: "Student added successfully",
    students: students,
  });
}

function updateStudent(req, res) {
  console.log(req.params, req.body);
  for (let i = 0; i < students.length; i++) {
    if (students[i].id == req.params.id) {
      students[i].name = req.body.name;
      break;
    }
  }
  return res.status(200).json({ message: "Success", students });
}

function deleteStudent(req, res) {
  students = students.filter(function (student) {
    return student.id !== req.params.id;
  });
  return res.status(200).json({ message: "Success", students });
}

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
