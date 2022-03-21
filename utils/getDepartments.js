const getDepartments = (db) => {
    const sql = "SELECT id as ID, name as Department FROM department ORDER BY name";
    db.query (sql, (err, rows) => {
        if (err) {
            console.log("Error getting Departments");
            return;
        }
        console.log("\n");
        console.log("Departments:");
        console.table(rows);
        console.log("\n");
    })
    return;
}

module.exports = getDepartments;
