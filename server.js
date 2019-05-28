// var express = require("express");

// var PORT = process.env.PORT || 8080;

// var app = express();



// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// // Parse application body
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

require('dotenv').config()
var express = require('express');
var app = express();
//var path = require("path");
var bodyParser = require('body-parser');


var PORT = process.env.PORT || process.env.DEV_PORT || 5000;

//create application/json parser
//var jsonParser = bodyParser.json()

//create application/x=www-form-urlencoded parser
//var urlencodeParser = bodyParser.urlencoded({extended: false})

//extended: true helps the front in and back it talk to each other
app.use(express.urlencoded({ extended: true }));

// parse JSON types
app.use(bodyParser.json({ type: 'application/*+json' }))

//parse stuff in the Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custon-type' }))

//parse HTML to string type
app.use(bodyParser.text({ type: 'text/html' }))

// these routes give  the server a map of how to respond
//link to the api routes
require("./app/routing/apiRoutes.js")(app);
// links to the html routes
require("./app/routing/htmlRoutes.js")(app);




app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});



