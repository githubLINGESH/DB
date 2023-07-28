const express = require('express');
const router = express.Router();
const { getlabour, submitlabour } = require('../controller/labourController');

router.get('/',getlabour);
router.post('/submit', submitlabour);

module.exports = router;
