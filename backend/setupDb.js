const fs = require("fs");
const path = require("path");
const mysql = require("mysql2/promise");
require("dotenv").config({ path: path.join(__dirname, ".env") });

async function setup() {
  const host = process.env.DB_HOST || "localhost";
  const user = process.env.DB_USER || "root";
  const password = process.env.DB_PASSWORD || "root";
  const database = process.env.DB_NAME || "lambda_db";

  console.log(`Connecting to MySQL at ${host} as ${user}...`);

  let connection;
  try {
    
    connection = await mysql.createConnection({
      host,
      user,
      password,
      multipleStatements: true
    });
    console.log("Connected successfully to MySQL server.");
  } catch (err) {
    console.error("Could not connect to MySQL server. Please make sure MySQL is running and credentials in backend/.env are correct.");
    console.error("Error:", err.message);
    process.exit(1);
  }

  try {
   
    console.log(`Re-creating database \`${database}\` to ensure clean setup...`);
    await connection.query(`DROP DATABASE IF EXISTS \`${database}\``);
    await connection.query(`CREATE DATABASE \`${database}\``);
    await connection.query(`USE \`${database}\``);

   
    const sqlPath = path.join(__dirname, "..", "lambda.sql");
    if (!fs.existsSync(sqlPath)) {
      console.error(`lambda.sql not found at ${sqlPath}`);
      process.exit(1);
    }
    console.log("Reading and preprocessing lambda.sql...");
    let sql = fs.readFileSync(sqlPath, "utf8");

  
    sql = sql.replace(/DELIMITER\s+\$\$/gi, "");
    sql = sql.replace(/DELIMITER\s+;/gi, "");


    sql = sql.replace(/\$\$/g, ";");


    sql = sql.replace(/CREATE DATABASE\s+lambda\s*;/gi, "-- CREATE DATABASE lambda;");
    sql = sql.replace(/USE\s+lambda\s*;/gi, `USE \`${database}\`;`);
    sql = sql.replace(/CREATE DATABASE\s+lambda_db\s*;/gi, "-- CREATE DATABASE lambda_db;");
    sql = sql.replace(/USE\s+lambda_db\s*;/gi, `USE \`${database}\`;`);

   
    sql = sql.replace(/drop table built_in_components;/gi, "DROP TABLE IF EXISTS built_in_components;");

  
    sql = sql.replace(/DELETE FROM image_gallery\s+WHERE id IN\s*\(1,2,3,4,5,6,7,8\);/gi, "-- DELETE FROM image_gallery WHERE id IN (1,2,3,4,5,6,7,8);");

   
    sql = sql.replace(/DELETE FROM announcements\s+WHERE id IN\s*\(1,2,3,4\);/gi, "-- DELETE FROM announcements WHERE id IN (1,2,3,4);");
    sql = sql.replace(/WHERE id=5;/gi, "WHERE id=1;");
    sql = sql.replace(/WHERE id=6;/gi, "WHERE id=2;");
    sql = sql.replace(/WHERE id=7;/gi, "WHERE id=3;");
    sql = sql.replace(/WHERE id=8;/gi, "WHERE id=4;");

    console.log("Executing SQL script...");
    await connection.query(sql);

    console.log("Database initialized successfully!");
  } catch (err) {
    console.error("Database initialization failed:", err.message);
  } finally {
    if (connection) await connection.end();
  }
}

setup();
