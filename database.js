const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your MySQL user
  password: 'your_password', // Replace with your MySQL password
  database: 'employee_db' // Replace with your desired database name
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL server.');

  const createEmployeesTable = `
    CREATE TABLE IF NOT EXISTS employees (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      type ENUM('commission', 'salaried', 'hourly') NOT NULL,
      income DECIMAL(10,2) NOT NULL
    );
  `;

  connection.query(createEmployeesTable, (err, result) => {
    if (err) throw err;
    console.log('Employees table created or already exists.');
  });
});

module.exports = connection;
