const express = require('express');
const router = express.Router();
const { submitTask, getTasks, getpage } = require('../controller/contractController');

router.get('/',getpage);
router.post('/submit', submitTask);
router.get('/det', getTasks);

module.exports = router;
