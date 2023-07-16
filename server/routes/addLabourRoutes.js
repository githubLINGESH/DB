const express = require('express');
const router = express.Router();
const addLabourController = require('../controller/addLabourController');

router.get('/', addLabourController.getAddLabourPage);
router.get('/tasks', addLabourController.getTasks);
router.post('/submit-task', addLabourController.submitLabour);

module.exports = router;
