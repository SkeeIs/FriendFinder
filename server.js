//Declare dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//providing pointer to express app
var app = express();
var PORT = process.env.PORT || 3000;

//telling express to use body parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//requiring our different routes
var apiRoutes = require("./app/routing/apiRoutes")(app, path);
var htmlRoutes = require("./app/routing/htmlRoutes")(app, path);
//set up server listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });