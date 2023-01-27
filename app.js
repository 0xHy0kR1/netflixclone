const express = require("express"); // Importing the express module
const path = require("path"); // We import this module to give path to the view directory
const app = express(); // making the express app
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

app.get('/', (req, res) =>{
    const con = "This is a content"
    const params = {'title': 'Netflix is a title', "content": con}
    res.status(200).render('index.pug', params);
})

app.listen(port, (req, res) => {
    console.log(`The application started sucessfully on port ${port}`);
})