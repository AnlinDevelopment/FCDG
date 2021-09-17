const mariadb = require("mariadb");

const db = mariadb.createPool({
  host: "192.168.252.199",
  port: "3306",
  user: "root",
  password: "Anlin",
  database: "fcdg",
  connectionLimit: 5,
});

export default db;
