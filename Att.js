    const express = require('express');
    const bodyParser = require('body-parser');
    const router = express.Router();
    const mongoose = require('mongoose')


    // Middleware to parse request body
    router.use(bodyParser.urlencoded({ extended: true }));
    router.use(bodyParser.json());
    // Import the attendance routes and use them
    const attendanceRoutes = require('./server/routes/attendanceRoutes');
    router.use('/', attendanceRoutes);

    module.exports = router;


