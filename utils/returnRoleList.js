const returnRoleList = (db) => {
    let result = [];
    const sql = "SELECT concat (id, '. ', title) as role FROM role ORDER BY title";
    db.query (sql, (err, rows) => {
        if (err) {
            console.log("Error getting Roles");
            console.log(err);
            return;
        }
        rows.forEach(element => {
            result.push(element.role);
        });
    })
    return result;
}

module.exports = returnRoleList;