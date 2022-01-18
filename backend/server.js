const express = require("express");
const app = express();
//for db connection, to mongo
const mongoose = require("mongoose");
//for env variables
require('dotenv/config');
const cors = require('cors');

const bodyParser = require("body-parser");

//Import routes
const inventoryRoutes = require("./routes/inventoryRoutes");

//middlewear
app.use(cors());
app.use(bodyParser.json());
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
