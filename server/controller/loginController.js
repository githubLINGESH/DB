const LoginModel = require('../model/loginModel');
const path = require('path');

// Validate email, password, and authentication code against the data in MongoDB
const validateLogin = async (email, password, auth) => {
  let query = { email, password };

  if (auth) {
    query.auth = auth;
  }

  return await LoginModel.exists(query);
};

 exports.getpage = async (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'login.html'));
 };

// Handle the form submission
 exports.login = (req, res) => {
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
};
