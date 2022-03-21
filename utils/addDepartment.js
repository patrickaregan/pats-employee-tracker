const addDepartment = (db, department_name) => {
    const sql = `INSERT INTO department (name) VALUES (?)`;
    const params = [ department_name ]
    db.query (sql, params, (err, rows) => {
        if (err) {
            console.log("Error adding Department!");
            return;
        }
        console.log("\n");
        console.log("Department added successfully!");
        console.log("\n");
        return;
    })
}

module.exports = addDepartment;