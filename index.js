// **************************************************
// Create global variables
// **************************************************
const inquirer = require("inquirer");
const db = require('./db/connection');
const getDepartments = require('./utils/getDepartments');
const addDepartment = require('./utils/addDepartment');
const getRoles = require('./utils/getRoles');
const getEmployees = require('./utils/getEmployees');
let option = "0";
let department_name = "";

// **************************************************
// Connect to the database
// **************************************************
db.connect(err => {
    if (err) throw err;
})

// **************************************************
// Question arrays
// **************************************************

// Option questions
const optionQuestions = [
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

// Deparement questions
const departmentQuestions = [
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

const optionsMenu = () => {
    inquirer.prompt(optionQuestions).then((answers) => {
        option = answers.choice.split(". ")[0];
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
                option = 4;
                //console.log("\n");
                addDepartmentMenu();
                break;
            case "8":
                console.log("quitting...");
                process.exit();
                break;
        }
    });
}

const addDepartmentMenu = () => {
    inquirer.prompt(departmentQuestions).then((answers) => {
        department_name = answers.choice.trim();
        addDepartment(db, department_name);
        setTimeout(optionsMenu, 500);
    });
}

optionsMenu();

