const express = require('express');
const router = express.Router();
const { getprodf,submitprod } = require('../controller/prodController');

router.get('/',getprodf);
router.post('/submitprodf', submitprod);

module.exports = router;
