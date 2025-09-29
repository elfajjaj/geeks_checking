const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres", // بدّلها ب username ديالك
  host: "localhost",
  database: "blogdb", // اسم الـDB
  password: "123456", 
  port: 5432,
});

module.exports = pool;
