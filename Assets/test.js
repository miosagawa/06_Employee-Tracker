
// var mysql = require("mysql");
// var inquirer = require("inquirer");

// var connection = mysql.createConnection({
//   host: "localhost",
//   // Your port; if not 3306
//   port: 3306,
//   // Your username
//   user: "root",
//   // Your password
//   password: "Akiko416",
//   // DB
//   database: "databaseDB"
// });

//データベース作成：
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     connection.query("CREATE DATABASE databaseDB", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });

//テーブル作成：
// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE department (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(30) NULL,PRIMARY KEY (id))";
//   connection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });