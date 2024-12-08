const db = require('../config/db');

exports.getFilteredTasks = function(ddate,category,callback) {
    db.query('SELECT * FROM tasks WHERE category LIKE ? OR due_date LIKE ?',[category,ddate], callback);
};

exports.getTaskById = function(id, callback) {
    db.query('SELECT * FROM tasks WHERE title = ?', [id], callback);
};

exports.createTask = function(newTask, callback) {
    db.query('INSERT INTO tasks SET ?', newTask, callback);
};

exports.updateTask = function(id, updatedTask, callback) {
    db.query('UPDATE tasks SET ? WHERE title = ?', [updatedTask, id], callback);
};

exports.deleteTask = function(id, callback) {
    db.query('DELETE FROM tasks WHERE title = ?', [id], callback);
};
