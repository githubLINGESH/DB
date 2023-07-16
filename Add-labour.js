    const express = require('express');
    const bodyParser = require('body-parser');
    const mongoose = require('mongoose');
    const router = express.Router();


    router.use(bodyParser.urlencoded({ extended: true }));
    router.use(bodyParser.json());

    router.use('/', require('./server/routes/addLabourRoutes'));
    module.exports = router;

