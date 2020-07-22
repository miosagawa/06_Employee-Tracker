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
connection.connect(function(err) {
    if (err) throw err;
    start();
  });

// 1.What would you like to do？
function start() {
    inquirer
      .prompt({
        name: "view",
        type: "list",
        message: "What would you like to do?",
        choices: ["view all employees",
                  "view all department",
                  "view all role",
                  "view all employees by role", 
                  "view all employees by Manager",
                  "Add employees",
                  "Remove employees",
                  "Update employees role",
                  "Update employees Manager",
                  "View the total utilized budget of a departmen"

                ]
      })

      .then(function(answer) {
       
        // (1).view all employees
        if (answer.view === "view all employees") {
            viewEmployees();
        }
        else if(answer.view === "view all department") {
            viewDepartment();
        }
        else if(answer.view === "view all role") {
            viewRole();
        }

        // (2).view all employees by role
        else if(answer.view === "view all employees by role") {
            viewEmployeesRole();
        }
        // (3).view all employees by Manager
        else if(answer.view === "view all employees by Manager") {
            viewEmployeesManager();
        }
        // (4).Add employees
        else if(answer.view === "Add employees") {
            Addemployees();
        }
        // (5).Remove employees
        else if(answer.view === "Remove employees") {
            Removeemployees();
        }
        // (6).Update employees role
        else if(answer.view === "Update employees role") {
            UpEmployeesRole();
        }
        // (7).Update employees Manager
        else if(answer.view === "Update employees Manager") {
            UpEmployeesManager();
        }
        // (8).View the total utilized budget of a departmen
        else if(answer.view === "View the total utilized budget of a departmen") {
            viewBudget();
      }  
        else{
          connection.end();
        }
      });
  }

//(1).view all employees
function viewEmployees() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM employee", function(err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
}
function viewDepartment() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM department", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}
function viewRole() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM role", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

// (2).view all employees by role
function viewEmployeesRole() {
    console.log("Selecting all products...\n");
    connection.query("SELECT role_id, first_name, last_name FROM employee ORDER BY role_id", function(err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
}

// (3).view all employees by Manager
function viewEmployeesManager() {
  console.log("Selecting all products...\n");
  connection.query("SELECT Manager_id, first_name, last_name FROM employee ORDER BY Manager_id", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

// (4).Add employees
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


//(5).Remove employees
function Removeemployees() {
    inquirer
      .prompt([
        {
          name: "id",
          type: "input",
          message: "What is id of the employee you want to delete?"
        }
      ])
      .then(function(answer) 
      {
        connection.query
        (
          "DELETE FROM employee WHERE ?",
          {
            id: answer.id,
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

// (6).Update employees role(Right to left)
function UpEmployeesRole() {
  console.log("Selecting all products...\n");
  connection.query("UPDATE employee SET role_id = 1 WHERE role_id= 2", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

// (7).Update employees Manager(Right to left)
function UpEmployeesManager() {
  console.log("Selecting all products...\n");
  connection.query("UPDATE employee SET Manager_id = 3 WHERE Manager_id = 5 ", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

// (8).View the total utilized budget of a departmen
function viewBudget() {
  console.log("Selecting all products...\n");
  connection.query("SELECT department_id, sum(salary) as total_salary FROM role group BY department_id", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}






