// Create global variables
const inquirer = require("inquirer");
const db = require('./db/connection');
const getDepartments = require('./utils/getDepartments');
const getRoles = require('./utils/getRoles');
const getEmployees = require('./utils/getEmployees');
let option = "0";

// Connect to database
db.connect(err => {
    if (err) throw err;
})

// Array of questions
const options = [
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
            "9. Quit",
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

const optionsMenu = () => {
    inquirer.prompt(options).then((answers) => {
        option = answers.choice.split(". ")[0];
        switch (option) {
            case "1":
                getDepartments(db);
                break;
            case "2":
                getRoles(db);
                break;
            case "3":
                getEmployees(db);
                break;
            case "4":
                // Add a Department
                break;
            case "9":
                console.log("Quitting!");
                break;
        }
        if (option === "9") {
            process.exit();
        } else {
            let timeoutID = setTimeout(optionsMenu, 500);
        }
    });
}

optionsMenu();

