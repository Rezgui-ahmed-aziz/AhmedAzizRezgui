CREATE DATABASE `tasks`;

CREATE TABLE tasks (
    title VARCHAR(100) PRIMARY KEY,
    descrip VARCHAR(100) NOT NULL,
    priority VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    due_date VARCHAR(100) NOT NULL,
    completion_status VARCHAR(100) NOT NULL
);
