const returnExistingEmployeeList = (db) => {
    let result = [];
    const sql = "SELECT concat (id, '. ', first_name, ' ', last_name) as employee FROM employee ORDER BY first_name";
    db.query (sql, (err, rows) => {
        if (err) {
            console.log("Error getting Employees");
            console.log(err);
            return;
        }
        rows.forEach(element => {
            result.push(element.employee);
        });
    })
    return result;
}

module.exports = returnExistingEmployeeList;