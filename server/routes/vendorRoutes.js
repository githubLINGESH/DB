const express = require('express');
const router = express.Router();
const { getvendor, submitvendor } = require('../controller/vendorController');

router.get('/',getvendor);
router.post('/submit', submitvendor);

module.exports = router;
