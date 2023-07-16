const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const PORT = process.env.PORT || 5501;
const dbName = 'Labour_Management';
const collectionName = 'Attendance';
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const path = require('path');
const router = express.Router();
app.use(router);


const myMiddleware = (req, res, next) => {
    // Your middleware logic here
    next();
};
router.use(myMiddleware);

const uri = 'mongodb+srv://jayran:' + encodeURIComponent('O9UdszTUcb8j2KA7') + '@cluster0.v6wdfkq.mongodb.net/Site_Activity?retryWrites=true&w=majority';
const client = new MongoClient(uri);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Attentdance.html'));
});

module.exports = router;

    app.post('/submit-task', async (req, res) => {
        const { date, male, female, total , w_female,w_male } = req.body;
    
        try {
        await client.connect();
        console.log('Connected to the database'); // Add this line
    
        const database = client.db('Labour_Management');
        const collection = database.collection('Attendance');
    
        const record = {
            date: date,
            male: male,
            female: female,
            total: total,
            w_female: w_female,
            w_male: w_male
            
        };
    
        const result = await collection.insertOne(record);
        console.log('Record inserted successfully.');
    
        res.status(200).send('Record inserted successfully.');
        } catch (error) {
        console.error('Error inserting record:', error);
        res.status(500).send('Error inserting record.');
        } finally {
        await client.close();
        }
    });
    
app.get('/tasks', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('Labour_Management');
        const collection = database.collection('Attendance');

        // Retrieve all tasks from the collection
        const tasks = await collection.find().toArray();

        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error retrieving tasks:', error);
        res.status(500).send('Error retrieving tasks.');
    }

    finally {
            if (client && client.topology && client.topology.isConnected()) {
            await client.close();
            }
        }}
    
);

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});


