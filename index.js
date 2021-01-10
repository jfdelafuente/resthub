// FileName: index.js

//var express = require('express');
let properties = require('./config/properties');
let db = require('./config/database');
//var app = express();

// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
// let mongoose = require('mongoose');
// Initialise the app
let app = express();

// Import routes
let apiRoutes = require("./api-routes");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// server estatic file
app.use(express.static('public'));

// call the database connectivity function
db();

// Connect to Mongoose and set connection variable
// mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});
// var db = mongoose.connection;

// Added check for DB connection
// if(!db)
//    console.log("Error connecting db")
// else
//    console.log("Db connected successfully")

// Setup server port
//var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
//app.listen(port, function () {
//    console.log("Running RestHub on port " + port);
//});

app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on ${properties.PORT} port.`);
});