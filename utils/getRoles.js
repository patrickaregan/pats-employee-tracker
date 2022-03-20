const getRoles = (db) => {
    const sql = "SELECT a.id as ID, a.title as Title, b.name as Department, a.salary as Salary FROM role a LEFT JOIN department b ON a.department_id = b.id ORDER BY a.id";
    db.query (sql, (err, rows) => {
        if (err) {
            console.log("Error getting Roles");
            return;
        }
        console.log("\n");
        console.log("Roles:");
        console.table(rows);
        console.log("\n");
        return;
    })
}

module.exports = getRoles;
