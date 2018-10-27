//DEPENDENCIES
var express = require ("express");
var bodyParser = require("body-parser");
var path = require ("path");
var PORT = process.env.PORT || 1090;

var app = express ();



// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// Console Log Server is actually running
app.listen(PORT, function() {
    console.log("Server is up and running on " + PORT);
}); 