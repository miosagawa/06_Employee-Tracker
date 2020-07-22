
var mysql = require("mysql");
var inquirer = require("inquirer");

//データベース作成：
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE databaseDB", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });

//テーブル作成：
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE department (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(30) NULL,PRIMARY KEY (id))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});