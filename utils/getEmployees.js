const getEmployees = (db) => {
    const sql = `SELECT a.id as ID,
                    a.first_name as First_Name,
                    a.last_name as Last_Name,
                    b.title as Job_Title,
                    c.name as Department,
                    b.salary as Salary,
                    concat(d.first_name, ' ', d.last_name) as Manager
                FROM employee a
                    LEFT JOIN role b on a.role_id = b.id
                    LEFT JOIN department c on b.department_id = c.id
                    LEFT JOIN employee d on a.manager_id = d.id
                ORDER BY a.first_name`;
    db.query (sql, (err, rows) => {
        if (err) {
            console.log("Error getting Employees");
            return;
        }
        console.log("\n");
        console.log("Employees:");
        console.table(rows);
        console.log("\n");
    })
    return;
}

module.exports = getEmployees;