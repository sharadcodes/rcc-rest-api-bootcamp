const express = require("express");
const crypto = require("crypto");
const morgan = require("morgan");
// const { randomUUID } = require("crypto");
const app = express();
const PORT = 3000;

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
const studentRoutes = require("./routes/student");

// root route

app.get("/", (req, res) => {
  return res.send("Pranam! 🙏🏻");
});

// use the imported routes
app.use("/students", studentRoutes);

// this line starts the server
app.listen(PORT, function () {
  console.log("Server is running on http://localhost:" + PORT);
  // http://localhost:3000/ open this in browser to see the output
});
