const mongoose = require('mongoose');

// Define the login data schema
const loginSchema = new mongoose.Schema({
  email: String,
  password: String,
  auth: String
});

// Create a model based on the schema
const LoginModel = mongoose.model('Login', loginSchema);

module.exports = LoginModel;
