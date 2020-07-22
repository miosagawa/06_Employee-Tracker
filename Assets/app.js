var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "Akiko416",
  // DB
  database: "databaseDB"
});

// connect to the mysql server and sql database
// mysqlサーバーとsqlデータベースに接続する
connection.connect(function(err) {
    if (err) throw err;
    start();
  });

// 1.何を表示しますか？
function start() {
    inquirer
      .prompt({
        name: "view",
        type: "list",
        message: "Would you like to do?",
        choices: ["view all employees", 
                  "view all employees by Deprtment", 
                  "view all employees by Manager",
                  "Add employees",
                  "Remove employees",
                  "Update employees role",
                  "Update employees Manager"

                ]
      })

      .then(function(answer) {
       
        // 1.すべての従業員を表示する
        if (answer.view === "view all employees") {
            viewEmployees();
        }
        // 2.すべての従業員を部門別に表示する
        else if(answer.view === "view all employees by Deprtment") {
            viewDeprtment();
        }
        // 3.すべての従業員をマネージャー別に表示
        else if(answer.view === "view all employees by Manager") {
            viewManager();
        }


        // 4.従業員を追加
        else if(answer.view === "Add employees") {
            Addemployees();
        }
        // 5.従業員を削除
        else if(answer.view === "Remove employees") {
            Removeemployees();
        }
        // 6.従業員の役割を更新する
        else if(answer.view === "Update employees role") {
            UpEmployeesRole();
        }
        // 7.従業員マネージャーの更新
        else if(answer.view === "Update employees Manager") {
            UpEmployeesManager();
        }  
        // 8.それ以外
        else{
          connection.end();
        }
      });
  }

//1.全ての従業員を表示する(部署と役割と名前)
function viewEmployees() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM employee", function(err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
}

// 2.すべての従業員を部門別に表示する
function viewDeprtment() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM employee　order by manager_id", function(err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
}


//5-1.削除する(部署と役割と名前)
function Removeemployees() {
    inquirer
      .prompt([
        {
          name: "first_name",
          type: "input",
          message: "What is the first name of the employee you want to delete?"
        },
        {
          name: "last_name",
          type: "input",
          message: "What is the last name of the employee you want to delete?"
        },
        {
          name: "delete_role",
          type: "list",
          message: "Which role of employee do you want to delete?",
          choices: ["Lead Engineer", 
                    "Software Engineer", 
                    "Account Manager",
                    "Account"
                ]
        },
        {
          name: "delete_Manager",
          type: "list",
          message: "Who is the manager of the employee you want to delete?",
          choices: ["John Doe", 
                    "Mike Chan", 
                    "Sarah Lourd"
                ]
        }
      ])

      .then(function(answer) 
      {
        connection.query
        (
          "DELETE FROM employee WHERE where_condition",
          {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.delete_role,
            manager_id: answer.delete_Manager,
          },
          function(err) 
          {
            if (err) throw err;
            console.log("Your auction was deleted successfully!");
            start();
          }
        );
      });
  }


// Add departments, roles, employees
//4-1.追加する(部署と役割と名前)
  function Addemployees() {
    inquirer
      .prompt([
        {
          name: "first_name",
          type: "input",
          message: "What is the first name of the employee you want to add?"
        },
        {
          name: "last_name",
          type: "input",
          message: "What is the last name of the employee you want to add?"
        },
        {
            name: "add_role",
            type: "list",
            message: "Which role of employee do you want to add?",
            choices: 
                    //  ["Lead Engineer", 
                    //   "Software Engineer", 
                    //   "Account Manager",
                    //   "Account"
                    //  ]
                    [1,2,3,4,5,6]
          },
          {
            name: "add_Manager",
            type: "list",
            message: "Who is the manager of the employee you want to add?",
            choices: 
                    //  ["John Doe", 
                    //   "Mike Chan", 
                    //   "Sarah Lourd"
                    //  ]
                     [1,2,3,4,5,6]
        }
      ])

      .then(function(answer) 
      {
        connection.query
        (
          "INSERT INTO employee SET ?",
          {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.add_role,
            manager_id: answer.add_Manager,
          },
          function(err) 
          {
            if (err) throw err;
            console.log("Your auction was created successfully!");
            start();
            
          } 
        );
      });
  }







// 6.従業員の役割を更新する
// function UpEmployeesRole() {
// connection.connect(function(err) {
//     if (err) throw err;
//     var sql = "UPDATE employee SET role_id = 1 WHERE role_id = 6 ";
//     connection.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(" record(s) updated");
//     });
//   });
// }






