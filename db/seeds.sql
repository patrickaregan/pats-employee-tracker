
INSERT INTO department
    (name)
VALUES
    ('Accounting'),
    ('Finance'),
    ('Human Resources'),
    ('Legal'),
    ('Sales'),
    ('Technology');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Accountant',75000.00, 1),
    ('CFO', 200000.00, 2),
    ('HRBP', 75000.00, 3),
    ('Lawyer', 95000.00, 4),
    ('Salesperson', 70000.00, 5),
    ('Developer', 100000.00, 6);
