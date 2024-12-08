// controllers/taskController.js
const Task = require('../models/taskModel');

exports.getFilteredTasks = function(req, res) {
    Task.getFilteredTasks(req.params.ddate,req.params.category,(err, tasks) => {
        if (err) throw err;
        res.json(tasks);
    });
};

exports.getTaskById = function(req, res) {
    Task.getTaskById(req.params.id, (err, task) => {
        if (err) throw err;
        res.json(task);
    });
};

exports.createTask = function(req, res) {
    const newTask = {
        title: req.body.title,
        descrip : req.body.descrip,
        priority : req.body.priority,
        category : req.body.category,
        due_date : req.body.due_date,
        completion_status: req.body.completion_status
    };

    Task.createTask(newTask, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Task created successfully'});
    });
};

exports.updateTask = function(req, res) {
    const updatedTask = {
        title: req.body.title,
        descrip : req.body.descrip,
        priority : req.body.priority,
        category : req.body.category,
        due_date : req.body.due_date,
        completion_status: req.body.completion_status
    };

    Task.updateTask(req.params.id, updatedTask, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Task updated successfully' });
    });
};

exports.deleteTask = function(req, res) {
    Task.deleteTask(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Task deleted successfully' });
    });
};