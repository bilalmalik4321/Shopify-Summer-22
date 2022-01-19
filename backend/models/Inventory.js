//This file builds the Inventory document schema

//import mongoose library for mongodb object modeling for node.js
const mongoose = require("mongoose");

//inventory object takes these values, if you send a request without the specified values
//it will not create the document as the fields are required
const InventorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true
    }
});

//export the mongoose object
module.exports = mongoose.model('Inventory', InventorySchema);

