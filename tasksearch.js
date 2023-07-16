const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose')

// Move the client initialization outside of route handlers

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Use the `finally` block to close the client connection

router.use(require('./server/routes/todoRoutes'));
module.exports = router;
