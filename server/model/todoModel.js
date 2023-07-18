    const mongoose = require('mongoose');

    const subTaskSchema = new mongoose.Schema({
    Sub_Task_name: String,
    Checklist: String,
    });

    const toDoSchema = new mongoose.Schema({
    Task_name: String,
    Sub_Tasks: [subTaskSchema],
    Start_date: Date,
    End_date: Date,
    Work_done: String,
    });

    const S_ToDo = mongoose.model('S_ToDo', toDoSchema);

    module.exports = S_ToDo;
