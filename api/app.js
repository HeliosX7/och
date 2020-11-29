var http = require("http");
const express = require("express");
const app = express();
require("dotenv").config();
var cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidators = require("express-validator");
const commonRoutes = require("./routes/commonRoutes");
const userRoutes = require("./routes/userRoutes");
const fellowshipRoutes = require("./routes/fellowshipRoutes");
// middilewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//app.use(expressValidators());

// Routes

app.use("/api", userRoutes);
app.use("/api", commonRoutes);
app.use("/api", fellowshipRoutes);

const mysql = require("mysql");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "admin",
  database: "ocl",
  port: "3306",
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(res);
    }
  });
});

app.get("/opt_courses", (req, res) => {
  db.query(
    "SELECT * FROM alloted_opt_courses aoc INNER JOIN opt_courses oc ON oc.id = aoc.course_id",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(res);
      }
    }
  );
});

app.get("/opt_grades", (req, res) => {
  db.query(
    "SELECT * FROM opt_grades og INNER JOIN opt_courses oc ON oc.id = og.course_id",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(res);
      }
    }
  );
});

app.post("/opt_register", (req, res) => {
  const id = req.body.id;
  const student_id = req.body.student_id;
  const course_id = req.body.course_id;
  db.query(
    "INSERT INTO alloted_opt_courses (id, student_id, course_id) VALUES (?,?,?)",
    [id, student_id, course_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.put("/status_change", (req, res) => {
  const id = req.body.id;
  const status = req.body.status;

  db.query(
    "UPDATE user_reg_status SET STATUS = ?  WHERE id = ? ",
    [status, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values updated");
      }
    }
  );
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
