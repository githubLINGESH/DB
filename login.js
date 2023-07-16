const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();


const app = express();
const port = 3000;

module.exports = router;


const myMiddleware = (req, res, next) => {
  // Your middleware logic here
  next();
};
router.use(myMiddleware);

// Connect to the MongoDB database using Mongoose
const dbURL = 'mongodb+srv://jayran:O9UdszTUcb8j2KA7@cluster0.v6wdfkq.mongodb.net/login?retryWrites=true&w=majority';
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

//sample
app.use('/css',express.static(path.resolve(__dirname,"styles/css")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use('/img',express.static(path.resolve(__dirname,"assets/css")))
app.set("view engine","html")
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//sample

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

// Serve the login.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
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
app.post('/', (req, res) => {
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

// Start the server
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
