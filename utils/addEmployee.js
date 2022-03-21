const addEmployee = (db, employee_fn, employee_ln, employee_role_id, employee_manager_id) => {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
    if (employee_manager_id === 'None') {
        employee_manager_id = null;
    }
    const params = [ employee_fn, employee_ln, employee_role_id, employee_manager_id ]
    db.query (sql, params, (err, rows) => {
        if (err) {
            console.log("Error adding Employee!");
            console.log(err);
            return;
        }
        console.log("Employee added successfully!");
        return;
    })
}

module.exports = addEmployee;