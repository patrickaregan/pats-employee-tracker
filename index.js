const greeting = require('./utils/sayHello');
const db = require('./db/connection');

// Display greeting after connecting to db
db.connect(err => {
    if (err) throw err;
    console.log(greeting());
})

// Function to get departments
const getDepartments = () => {
    const sql = "SELECT * FROM department";
    db.query (sql, (err, rows) => {
        if (err) {
            console.log("Error getting Departments");
            return;
        }
        console.log(rows);
        return;
    })
}

// Function to get departments
const getRoles = () => {
    const sql = "select name, title, salary from department left join role on department.id = role.department_id";
    db.query (sql, (err, rows) => {
        if (err) {
            console.log("Error getting Roles");
            return;
        }
        console.log(rows);
        return;
    })
}

getDepartments();
getRoles();








