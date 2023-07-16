const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose')

const uri = 'mongodb+srv://jayran:' + encodeURIComponent('O9UdszTUcb8j2KA7') + '@cluster0.v6wdfkq.mongodb.net/Site_Activity?retryWrites=true&w=majority';

// Move the client initialization outside of route handlers
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to the database');
})
.catch((error) => {
    console.error('Error connecting to the database:', error);
});

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Use the `finally` block to close the client connection
process.on('SIGINT', () => {
    mongoose.connection.close().then(() => {
        console.log('MongoDB connection closed');
        process.exit(0);
    });
});
router.use(require('./server/routes/todoRoutes'));