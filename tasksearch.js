const express = require('express');
const { MongoClient } = require('mongodb');
const PORT = process.env.PORT || 5501;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const path = require('path');
const router = express.Router();



const uri = 'mongodb+srv://jayran:' + encodeURIComponent('O9UdszTUcb8j2KA7') + '@cluster0.v6wdfkq.mongodb.net/Site_Activity?retryWrites=true&w=majority';
const client = new MongoClient(uri);

// Move the client initialization outside of route handlers
    async function initializeClient() {
    try {
        await client.connect();
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1); // Exit the application if an error occurs during connection
    }
    }

    // Initialize the client
    initializeClient();

    app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'TO-DO1.html'));
    });

    app.post('/submit-task', async (req, res) => {
    const { Taskname, Subtask, StartDate, EndDate } = req.body;

    try {
        const database = client.db('Site_Activity');
        const collection = database.collection('To_Do');

        const record = {
        Task_name: Taskname,
        Sub_Tasks: Subtask.map((subtask) => ({
            Sub_Task_name: subtask,
            Checklist: ''
        })),
        Start_date: StartDate,
        End_date: EndDate,
        Work_done: ''
        };

        const result = await collection.insertOne(record);
        console.log('Record inserted successfully.');

        res.status(200).send('Record inserted successfully.');
    } catch (error) {
        console.error('Error inserting record:', error);
        res.status(500).send('Error inserting record.');
    }
    });

    app.get('/tasks', async (req, res) => {
    try {
        const database = client.db('Site_Activity');
        const collection = database.collection('To_Do');

        const tasks = await collection.find().toArray();

        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error retrieving tasks:', error);
        res.status(500).send('Error retrieving tasks.');
    }
    });

    app.post('/search-tasks', async (req, res) => {
    const { taskName } = req.body;

    try {
        const database = client.db('Site_Activity');
        const collection = database.collection('To_Do');

        const tasks = await collection.find({ Task_name: taskName }).toArray();

        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error searching tasks:', error);
        res.status(500).send('Error searching tasks.');
    }
    });

    // Use the `finally` block to close the client connection
    process.on('SIGINT', () => {
    client.close().then(() => {
        console.log('MongoDB connection closed');
        process.exit(0);
    });
    });

    app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
    });
