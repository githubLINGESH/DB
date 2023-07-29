const express = require('express');
const router = express.Router();
const prodController = require('../controller/proenController');

// Route to render the material outward page
router.get('/', prodController.getproenPage);

// Route to handle material outward form submission
router.post('/createproen', prodController.createproen);

// Route to fetch all materials for the material outward page
router.get('/getMaterials', prodController.getMaterials);

module.exports = router;
