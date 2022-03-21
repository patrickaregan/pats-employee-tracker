const cTable = require('console.table');

const getDepartments = (db) => {
    const sql = "SELECT id as ID, name as Department FROM department ORDER BY name";
    db.query (sql, (err, rows) => {
        if (err) {
            console.log("Error getting Departments");
            return;
        }
        console.log("\n\n");
        console.log("#################");
        console.log("## DEPARTMENTS ##");
        console.log("#################");
        console.log("\n");
        console.table(rows);
        console.log("\n\n");
    })
    return;
}

module.exports = getDepartments;
