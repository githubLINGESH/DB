    const express = require('express');
    const bodyParser = require('body-parser');
    const mongoose = require('mongoose');
    const path = require('path');
    const PORT = process.env.PORT || 5502;
    const dbName = 'Site_Activity';
    const collectionName = 'Material';
    const app = express();
    const uri = 'mongodb+srv://jayran:' + encodeURIComponent('O9UdszTUcb8j2KA7') + '@cluster0.v6wdfkq.mongodb.net/Site_Activity?retryWrites=true&w=majority';
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });

    app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
    });

    process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Disconnected from the database');
        process.exit(0);
    });
    });
    app.use('/',require('./server/routes/materialRoutes'));
