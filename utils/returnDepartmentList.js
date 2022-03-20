const returnDepartmentList = (db) => {
    let result = [];
    const sql = "SELECT concat (id, '. ', name) as department FROM department";
    db.query (sql, (err, rows) => {
        if (err) {
            console.log("Error getting Departments");
            return;
        }
        rows.forEach(element => {
            result.push(element.department);
        });
    })
    return result;
}

module.exports = returnDepartmentList;