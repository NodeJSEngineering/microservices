// require express
// const express = require("express");
import express from "express";

//create an app using express constructor
const weatherApp = express();

// declare your port
const port = 5000;

// require routes from the routes.js file
// const routes = require("./api_source/routes");
import routes from "./api_source/routes.js";
// set the route for our application by passing the app to the routes object
routes(weatherApp);

// call the listen method on the app
weatherApp.listen(port, ()=>{
    console.log("Server is running is port: " + port);
});