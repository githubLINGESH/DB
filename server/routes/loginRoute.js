const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');

// Define your login routes and middleware here
const myMiddleware = (req, res, next) => {
  // Your middleware logic here
  next();
};
router.use(myMiddleware);

router.get('/', loginController.getpage);
router.post('/login', loginController.login);

module.exports = router; // Export the router instance
