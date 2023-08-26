const express = require("express");
const crypto = require("crypto");
// const { randomUUID } = require("crypto");

const app = express();

app.use(express.json());

const PORT = 3000;

const students = [
  { id: crypto.randomUUID(), name: "John" }, // 0 index
  { id: crypto.randomUUID(), name: "Tom" }, // 1 index
];

app.get("/", function (req, res) {
  return res.send("Hello World");
});

app.get("/student_data", function (req, res) {
  return res.status(200).json(students);
});

app.get("/student_data/:id", function (req, res) {
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
});

app.post("/student_data", function (req, res) {
  const name = req?.body?.name;
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
});
app.put("/student_data/:id", function (req, res) {
  console.log(req.params, req.body);
  for (let i = 0; i < students.length; i++) {
    if (students[i].id == req.params.id) {
      students[i].name = req.body.name;
      break;
    }
  }
  return res.status(200).json({ message: "Success", students });
});

// this line starts the server
app.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
  // http://localhost:3000/ open this in browser to see the output
});
