import db from "./config";

async function dbTest() {
  let conn;
  try {
    conn = await db.getConnection();
    const rows = await conn.query("SELECT * FROM fcdg.`security`;");
    console.log(rows); //[ {val: 1}, meta: ... ]
    const res = await conn.query("SELECT * FROM fcdg.`security`;", [
      1,
      "mariadb",
    ]);
    console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
  console.log("SQL: ", dbTest());
}

export default dbTest;
