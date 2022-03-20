const getEmployees = (db) => {
    const sql = "SELECT a.id, a.first_name, a.last_name FROM employee a ORDER BY a.id";
    db.query (sql, (err, rows) => {
        if (err) {
            console.log("Error getting Employees");
            return;
        }
        console.log("\n");
        console.log("Employees:");
        console.table(rows);
        console.log("\n");
        return;
    })
}

module.exports = getEmployees;