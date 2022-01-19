/*
This file builds the Inventory document schema
*/

const mongoose = require("mongoose");

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
        type: String,
        default: "No Listed Price"
    },
    discountPrice: String
});

module.exports = mongoose.model('Inventory', InventorySchema);

