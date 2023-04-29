-- Create the database
CREATE DATABASE IF NOT EXISTS employee_db;

-- Use the database
USE employee_db;

-- Create the employees table
CREATE TABLE IF NOT EXISTS employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    income DECIMAL(10,2) NOT NULL
);
