    const S_ToDo = require('../model/todoModel');
    const path = require('path')

    exports.getTodoPage = (req, res) => {
    res.sendFile(path.join(__dirname, '..','..', 'TO-DO1.html'));
    };

    exports.submitTask = async (req, res) => {
    const { Taskname, Subtask, StartDate, EndDate } = req.body;

    try {
        const record = new S_ToDo({
        Task_name: Taskname,
        Sub_Tasks: Subtask.map((subtask) => ({
            Sub_Task_name: subtask,
            Checklist: '',
        })),
        Start_date: StartDate,
        End_date: EndDate,
        Work_done: '',
        });

        await record.save();
        console.log('Record inserted successfully.');

        res.status(200).send('Record inserted successfully.');
    } catch (error) {
        console.error('Error inserting record:', error);
        res.status(500).send('Error inserting record.');
    }
    };

    exports.getTasks = async (req, res) => {
    try {
        const tasks = await S_ToDo.find();

        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error retrieving tasks:', error);
        res.status(500).send('Error retrieving tasks.');
    }
    };

    exports.searchTasks = async (req, res) => {
    const { taskName } = req.body;

    try {
        const tasks = await S_ToDo.find({ Task_name: taskName });

        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error searching tasks:', error);
        res.status(500).send('Error searching tasks.');
    }
    };
