const updateEmployeeRole = (db, update_employee_id, update_employee_role_id) => {
    const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
    const params = [ update_employee_role_id, update_employee_id ]
    db.query (sql, params, (err, rows) => {
        if (err) {
            console.log("Error updating employee's role!");
            console.log(err);
            return;
        }
        console.log("Role updated successfully!");
        return;
    })
}

module.exports = updateEmployeeRole;