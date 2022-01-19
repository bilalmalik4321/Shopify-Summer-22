//Inventory routes moved here to keep srver file smaller

//middlewear route, as not to over populate the server.js file
const express = require("express")
//init express router, that will run ontop of /inventory, these routes will all be reached from /inventory
const router = express.Router();
//pass in mongoose schema for inventory
const Inventory = require("../models/Inventory");

//GET on /inventory will result in getting all items from collection (table) as response
router.get("/", async (req, res) => {
    try{
        //get list of inventories back, give as response for successful read
        const fullInventory = await Inventory.find();
        //if successful give 200 response
        res.status(200).json(fullInventory);
    }catch(err){
        //send error response
        res.status(500).json({message: "Internal server error:"+err});
    }
});

//POST on /inventory with the correct body format, will result in a newly created
//inventory item, that is returned back as response
router.post("/", async (req, res)=>{
    const inventory = new Inventory({
        name: req.body.name,
        quantity: req.body.quantity,
        description: req.body.description,
        itemPrice: req.body.itemPrice
    }); 

    try{
        //get returned inventory back, give as response for successful creation
        const savedInventory = await inventory.save();
        //if successful give 200 response
        res.status(200).json(savedInventory);
    }
    catch(err){
        //send error response
        res.status(500).json({message: "Internal server error:"+err});
    }
    
})

//PATCH updates inventory item values
router.patch("/:inventoryId", async (req, res)=>{

    //create object to update the inventory document
    try{
        //get returned inventory back, give as response for successful update
        const updatedInventory = await Inventory.updateOne(
            {_id: req.params.inventoryId},
            { $set: { 
                name: req.body.name,
                quantity: req.body.quantity,
                description: req.body.description,
                itemPrice: req.body.itemPrice
             } }
        );
        //if successful give 200 response
        res.status(200).json(updatedInventory);
    }
    catch(err){
        //send error response
        res.status(500).json({message: "Internal server error:"+err});
    }
})

//DELETE removes the specific inventory item
router.delete("/:inventoryId", async (req, res)=>{

    try{
        //get returned inventory back, give as response for successful deletion
        const removedInventory = await Inventory.deleteOne({_id: req.params.inventoryId});
        //if successful give 200 response
        res.status(200).json(removedInventory);
    }
    catch(err){
        //send error response
        res.status(500).json({message: "Internal server error:"+err});
    }

})

//export route to be used by server file
module.exports = router;
