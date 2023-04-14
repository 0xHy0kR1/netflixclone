// Require the necessary packages in your Node.js app.
const express = require("express"); // Importing the express module
const path = require("path"); // We import this module to give path to the view directory
const bodyParser = require('body-parser'); // We import this to parse the form data because node.js doesn't include request body data that's why we use middleware
const mongoose = require('mongoose'); // By importing mongoose in our Node.js application, we can use it to create models for our data, connect to a MongoDB database, and perform CRUD (Create, Read, Update, and Delete) operations on our data.

// Set up the Express app and middleware stuffs
const app = express(); // making the express app

app.use(bodyParser.urlencoded({extended: true})); //  we import the body-parser middleware to extract the data submitted in a POST request from the request body, and we use it in our Express app by calling app.use().
app.use(bodyParser.json()); // it tells our Express app to use the body-parser middleware to parse JSON data in the request body of incoming HTTP requests. 

const port = 80;

// For Serving static files
app.use('/static', express.static('static'));

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory(There your pug files stored)
app.set('views', path.join(__dirname, 'views'))

// ENDPOINTS
// app.get("/index", (req, res) => {
//     res.status(200).render('index', {title: 'netflix', message: 'Hello there!'})
// });

// Connecting to the MongoDB database using Mongoose
// The below help us to estaiblish connection to the "netflix-index-email" database on the MongoDB server.
// Note - the `useNewUrlParser` and `useUnifiedTopology` options to avoid deprecation warnings
mongoose.connect('mongodb://localhost:27017/netflix',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection; // This means that `db` is now a shorter way to refer to the connection object which is created by Mongoose

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to database');
});

// Defining a schema for our email collection using Mongoose
const emailSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true,
    },
});
// Creating a table from the above schema
const Email = mongoose.model('Email', emailSchema);

app.post('/', (req, res) => {
    const email = new Email({
        email: req.body.email,
    });
    email.save()
        .then(() => {
            res.redirect('/signup/registration?locale=en-IN'); // In the web page client do a get request at "/signup" 
        })
        .catch((error) => {
            console.log(error);
        })
    });

    // The below is created only to serve the client "/signup" request
    app.get('/signup/registration', function(req, res) {
        res.render('signup', { locale: 'en-IN' });
      });
    
    // The below is created only to serve the client "/signin" request
    app.get('/in/login', function(req, res){
        res.render('signin');
    });

app.get('/', (req, res) =>{
    const con = "This is a content"
    const params = {'title': 'Netflix is a title', "content": con}
    res.status(200).render('index.pug', params);
})

app.listen(port, (req, res) => {
    console.log(`The application started sucessfully on port ${port}`);
})