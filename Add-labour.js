    const express = require('express');
    const bodyParser = require('body-parser');
    const mongoose = require('mongoose');
    const router = express.Router();

    const uri = 'mongodb+srv://jayran:' + encodeURIComponent('O9UdszTUcb8j2KA7') + '@cluster0.v6wdfkq.mongodb.net/Site_Activity?retryWrites=true&w=majority';

    router.use(bodyParser.urlencoded({ extended: true }));
    router.use(bodyParser.json());

    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });

    process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Disconnected from the database');
        process.exit(0);
    });
    });

    router.use('/', require('./server/routes/addLabourRoutes'));
