const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
// Define your login routes and middleware here
const myMiddleware = (req, res, next) => {
  // Your middleware logic here
  next();
};
router.use(myMiddleware);

router.get('/', (req, res) => {
  res.send('Login page');
});


// Define the login data schema
const loginSchema = new mongoose.Schema({
  email: String,
  password: String,
  auth: String
});

// Create a model based on the schema
const LoginModel = mongoose.model('Login', loginSchema);

// Validate email, password, and authentication code against the data in MongoDB
const validateLogin = async (email, password, auth) => {
  let query = { email, password };

  if (auth) {
    query.auth = auth;
  }

  return await LoginModel.exists(query);
};

// Handle the form submission
router.post('/', (req, res) => {
  const { email, password, auth } = req.body;

  // Validate email, password, and authentication code
  validateLogin(email, password, auth)
    .then((isValid) => {
      if (isValid) {
        console.log('Login successful');
        res.send('Login successful'); // Send a success response message
      } else {
        console.log('Invalid email, password, or authentication code');
        res.status(401).send('Invalid email, password, or authentication code'); // Send an error response message
      }
    })
    .catch((error) => {
      console.error('Error validating login', error);
      res.status(500).send('Error validating login'); // Send an error response message
    });
});

module.exports = router; // Export the router instance
