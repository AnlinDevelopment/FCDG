const express = require("express");
const app = express();
const mariadb = require("mariadb");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

//create the database connection to be used later to query the databse.
const db = mariadb.createPool({
  host: "192.168.252.199",
  port: "3306",
  user: "root",
  password: "Anlin",
  database: "fcdg",
});

const mydb = mysql.createPool({
  host: "192.168.252.199",
  port: "3306",
  user: "root",
  password: "Anlin",
  database: "fcdg",
});
//allows us to read and write from the frontend to the backend
app.use(cors());

//apply the middlewere to grab the json from the front end.
app.use(express.json());

//will encode everything as jason.
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get/user", (req, res) => {
  const sqlSelect = "SELECT * FROM fcdg.`security`;";

  mydb.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/get/test", (req, res) => {
  const sqlt = "SELECT * FROM fcdg.`security` LIMIT 10;";

  db.getConnection()
    .then((conn) => {
      console.log("connected ! connection id is " + conn.threadId);
      res.send("loading");

      db.query(sqlt, (err, result) => {
        console.log("req", sqlt);
        console.log("res", result);
        res.send(result);
      }).catch((err) => {
        console.log("err: ", err);
      });

      conn.release(); //release to pool
    })
    .catch((err) => {
      console.log("not connected due to error: " + err);
    });
});

//Creates a url so that we can pass variables between the frontend and backend and write to the DB
app.post("/api/insert", (req, res) => {
  const BEfirstName = req.body.BEfirstName;
  const BElastName = req.body.BElastName;
  const BEemail = req.body.BEemail;
  const BEpassword = req.body.BEpassword;
  const sqlInsert =
    "INSERT INTO fcdg.`security` (FirstName, LastName, Email, PW) VALUES (?, ?, ?, ?);";

  db.query(
    sqlInsert,
    [BEfirstName, BElastName, BEemail, BEpassword],
    (err, result) => {
      console.log("Results: ", result);
    }
  );
});

//make sure the server is running.
app.listen(3001, () => {
  console.log("Running on port 3001");
});
