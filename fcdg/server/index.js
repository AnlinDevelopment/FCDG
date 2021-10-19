var express = require("express");
var app = express();
var mariadb = require("mariadb");
var bodyParser = require("body-parser");
var cors = require("cors");
var mysql = require("mysql");

//request limit 1gb
app.use(json({ limit: 52428800 }));
app.use(urlencoded({ limit: 52428800, extended: true }));

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
    // res.send(result);
  });
});

app.get("/api/get/cards", (req, res) => {
  const sqlSelectCards = "SELECT * FROM fcdg.`card_info`;";

  mydb.query(sqlSelectCards, (err, result) => {
    // console.log("Result: ", result);
    res.send(result);
  });
});

app.post("/api/insert/cards", (req, res) => {
  const BEtitle = req.body.BEtitle;
  const BEphoto = req.body.BEphoto;
  const BEdescription = req.body.BEdescription;
  const sqlInsertCard =
    "INSERT INTO fcdg.`card_info` (title, photo, description) VALUES (?, ?, ?);";

  db.query(sqlInsertCard, [BEtitle, BEphoto, BEdescription], (err, result) => {
    // console.log("Result: ", result);
    // console.warn("error: ", err);
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
      // console.log("Results: ", result);
    }
  );
});

//make sure the server is running.
app.listen(3001, () => {
  // console.log("Running on port 3001");
});
