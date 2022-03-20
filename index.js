// **************************************************
// Create global variables
// **************************************************
const inquirer = require("inquirer");
const db = require('./db/connection');
const getDepartments = require('./utils/getDepartments');
const addDepartment = require('./utils/addDepartment');
const returnDepartmentList = require('./utils/returnDepartmentList');
const getRoles = require('./utils/getRoles');
const addRole = require('./utils/addRole');
const getEmployees = require('./utils/getEmployees');
const { conditionalExpression } = require("@babel/types");
// variables for adding a role
let role_title = "";
let role_salary = "";
let role_department_id = "";

// **************************************************
// Connect to the database
// **************************************************
db.connect(err => {
    if (err) throw err;
})


// **************************************************
// Menu questions
// **************************************************

// Options
const optionQuestion = [
    {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
            "1. View All Departments",
            "2. View All Roles",
            "3. View All Employees",
            "4. Add a Department",
            "5. Add a Role",
            "6. Add an Employee",
            "7. Update and Employee Role",
            "8. Quit",
            new inquirer.Separator(),
        ],
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("This is a required field!");
                return false;
            }
        }
    }
]

// Department
const departmentQuestion = [
    {
        type: "input",
        name: "choice",
        message: "What is the name of the Department?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("This is a required field!");
                return false;
            }
        }
    }
]

// Role Title
const roleTitleQuestion = [
    {
        type: "input",
        name: "choice",
        message: "What is the name of the role?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("This is a required field!");
                return false;
            }
        }
    }
]

// Role Salary
const roleSalaryQuestion = [
    {
        type: "input",
        name: "choice",
        message: "What is the salary of the role?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("This is a required field!");
                return false;
            }
        }
    }
]

// Role Department question
var roleDepartmentQuestion = [];

const setRoleDepartmentQuestion = () => {
    roleDepartmentQuestion = [
        {
            type: "list",
            name: "choice",
            message: "Which department does the role belong to?",
            choices: returnDepartmentList(db),
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("This is a required field!");
                    return false;
                }
            }
        }
    ]
}

setRoleDepartmentQuestion();


// **************************************************
// Menu functions
// **************************************************

// Options menu
const optionsMenu = () => {
    inquirer.prompt(optionQuestion).then((answers) => {
        const option = answers.choice.split(". ")[0];
        switch (option) {
            case "1":
                getDepartments(db);
                setTimeout(optionsMenu, 500);
                break;
            case "2":
                getRoles(db);
                setTimeout(optionsMenu, 500);
                break;
            case "3":
                getEmployees(db);
                setTimeout(optionsMenu, 500);
                break;
            case "4":
                addDepartmentMenu();
                break;
            case "5":
                getRoleTitleMenu();
                break;
            case "8":
                console.log("quitting...");
                process.exit();
                break;
        }
    });
}

// Add Department Menu
const addDepartmentMenu = () => {
    inquirer.prompt(departmentQuestion).then((answers) => {
        const department_name = answers.choice.trim();
        addDepartment(db, department_name);
        setTimeout(optionsMenu, 500);
        setRoleDepartmentQuestion();
    });
}

// Get Role Title Menu
const getRoleTitleMenu = () => {
    inquirer.prompt(roleTitleQuestion).then((answers) => {
        role_title = answers.choice.trim();
        getRoleSalaryMenu();
    });
}


// Get Role Salary Menu
const getRoleSalaryMenu = () => {
    inquirer.prompt(roleSalaryQuestion).then((answers) => {
        role_salary = answers.choice.trim();
        getRoleDepartmentMenu();
    });
}

const getRoleDepartmentMenu = () => {
    inquirer.prompt(roleDepartmentQuestion).then((answers) => {
        role_department_id = answers.choice.split(". ")[0];
        addRole(db, role_title, role_salary, role_department_id);
        setTimeout(optionsMenu, 500);
    });
}

// **************************************************
// Start the application
// **************************************************
optionsMenu();

