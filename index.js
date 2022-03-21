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
const returnRoleList = require('./utils/returnRoleList');
const getEmployees = require('./utils/getEmployees');
const addEmployee = require('./utils/addEmployee');
const returnEmployeeList = require('./utils/returnEmployeeList');
const { conditionalExpression } = require("@babel/types");
// variables for adding a role
let role_title = "";
let role_salary = "";
let role_department_id = "";
// variables for adding an employee
let employee_fn = "";
let employee_ln = "";
let employee_role_id = "";
let employee_manager_id = "";


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

// Employee First Name
const employeeFNQuestion = [
    {
        type: "input",
        name: "choice",
        message: "What is the employee's first name?",
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

// Employee Last Name
const employeeLNQuestion = [
    {
        type: "input",
        name: "choice",
        message: "What is the employee's last name?",
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

// Employee Role question
var employeeRoleQuestion = [];

const setEmployeeRoleQuestion = () => {
    employeeRoleQuestion = [
        {
            type: "list",
            name: "choice",
            message: "What is the employee's role?",
            choices: returnRoleList(db),
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

setEmployeeRoleQuestion();

// Employee Manager question
var employeeManagerQuestion = [];

const setEmployeeManagerQuestion = () => {
    employeeManagerQuestion = [
        {
            type: "list",
            name: "choice",
            message: "Who is the employee's manager?",
            choices: returnEmployeeList(db),
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

setEmployeeManagerQuestion();



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
            case "6":
                getEmployeeFNMenu();
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

// Get Role Department Menu
const getRoleDepartmentMenu = () => {
    inquirer.prompt(roleDepartmentQuestion).then((answers) => {
        role_department_id = answers.choice.split(". ")[0];
        addRole(db, role_title, role_salary, role_department_id);
        setTimeout(optionsMenu, 500);
        setEmployeeRoleQuestion();
    });
}

// Get Employee First Name Menu
const getEmployeeFNMenu = () => {
    inquirer.prompt(employeeFNQuestion).then((answers) => {
        employee_fn = answers.choice.trim();
        getEmployeeLNMenu();
    });
}

// Get Employee Last Name Menu
const getEmployeeLNMenu = () => {
    inquirer.prompt(employeeLNQuestion).then((answers) => {
        employee_ln = answers.choice.trim();
        getEmployeeRoleMenu();
    });
}

// Get Employee Role Menu
const getEmployeeRoleMenu = () => {
    inquirer.prompt(employeeRoleQuestion).then((answers) => {
        employee_role_id = answers.choice.split(". ")[0];
        getEmployeeManagerMenu();
    });
}

// Get Employee Manager Menu
const getEmployeeManagerMenu = () => {
    inquirer.prompt(employeeManagerQuestion).then((answers) => {
        employee_manager_id = answers.choice.split(". ")[0];
        addEmployee(db, employee_fn, employee_ln, employee_role_id, employee_manager_id);
        setTimeout(optionsMenu, 500);
        setEmployeeManagerQuestion();
    });
}

// **************************************************
// Start the application
// **************************************************
optionsMenu();

