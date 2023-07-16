const express = require('express');
const router = express.Router();
const { submitTask, getTasks, getpage } = require('../controller/contractController');

router.get('/',getpage);
router.post('/submit-task', submitTask);
router.get('/tasks', getTasks);

module.exports = router;
