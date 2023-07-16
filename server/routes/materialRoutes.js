const express = require('express');
const router = express.Router();
const materialController = require('../controller/materialController');

router.get('/', materialController.getMaterialPage);
router.get('/tasks', materialController.getTasks);
router.post('/submit-task', materialController.submitMaterial);

module.exports = router;
