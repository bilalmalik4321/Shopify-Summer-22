//import express library
const express = require("express");
//init express app
const app = express();
//Imports
//for db connection, to mongo
const mongoose = require("mongoose");
//for env variables
require('dotenv/config');
//import cors libaray
const cors = require('cors');
//require body parser to read in content from body of request
const bodyParser = require("body-parser");

//Import routes
const inventoryRoutes = require("./routes/inventoryRoutes");

//middlewear
//enable cors for cross site resource sharing, harmless as api runs locally, only accessd from local running resources
app.use(cors());
//parse the response as json
app.use(bodyParser.json());
//introduce inventory routes from aa seperate file, so handle routes
app.use("/inventory", inventoryRoutes);

//routes
app.get("/", (req, res,) => {
  res.json("Welcome to the API for my (Bilal Malik's) Shopify Challenge");
 });

 //connect to DB
 mongoose.connect(process.env.DB_CONNECTION, 
 ()=> console.log("connected to DB.") );

 //Start listening as server for requests
app.listen(5000, () => {
 console.log("Server running on port 5000");
});
