
INSERT INTO department
    (name)
VALUES
    ('Accounting'),
    ('Human Resources'),
    ('Legal'),
    ('Sales'),
    ('Technology');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Accountant',75000.00, 1),
    ('Recruiter', 70000.00, 2),
    ('Lawyer', 95000.00, 3),
    ('Salesperson', 65000.00, 4),
    ('Developer', 100000.00, 5);

INSERT INTO employee
    (first_name, last_name, role_id)
VALUES
    ('Martin', 'McFly', 1),
    ('Harold', 'Crick', 1),
    ('Jordan', 'Belfort', 2),
    ('Daniel', 'Kaffee', 3),
    ('James', 'McGill', 3),
    ('Shelley', 'Levene', 4),
    ('Thomas', 'Anderson', 5);

UPDATE employee SET manager_id = 1 WHERE id = 2;
UPDATE employee SET manager_id = 4 WHERE id = 5;

-- Department to add: Executive
-- Roles to add: CEO 300K, CFO 250K
-- Employees to add: CFO - Warren Buffet, CEO - Bill Gates

-- Roles to add: Analyst, 85000
-- Employees to add: CFO - Warren Buffet, CEO - Bill Gates

-- Department to add: Facilities, 55K
-- Roles to add: Custodian
-- Employees to add: Custodian - Joe Dirt
