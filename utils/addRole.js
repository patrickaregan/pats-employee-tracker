const addRole = (db, role_title, role_salary, role_department_id) => {
    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`;
    const params = [ role_title, role_salary, role_department_id ]
    db.query (sql, params, (err, rows) => {
        if (err) {
            console.log("Error adding Role");
            return;
        }
        console.log("Role added successfully!");
        return;
    })
}

module.exports = addRole;