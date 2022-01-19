//middlewear route, as not to over populate the server.js file
const express = require("express")
const router = express.Router();
const Inventory = require("../models/Inventory");

//GET on /inventory will result in getting all items from collection (table) as response
router.get("/", async (req, res) => {
    try{
        const fullInventory = await Inventory.find();
        res.status(200).json(fullInventory);
    }catch(err){
        res.status(500).json({message: err});
    }
});

//POST on /inventory with the correct body format, will result in a newly created
//inventory item, that is returned back as response
router.post("/", async (req, res)=>{
    const inventory = new Inventory({
        name: req.body.name,
        quantity: req.body.quantity,
        description: req.body.description,
        itemPrice: req.body.itemPrice,
        discountPrice: req.body.discountPrice,
    }); 

    try{
        const savedInventory = await inventory.save();
        res.status(200).json(savedInventory);
    }
    catch(err){
        res.status(500).json({message: err});
    }
    
})

//PATCH updates inventory item values
router.patch("/:inventoryId", async (req, res)=>{

    try{
        const updatedInventory = await Inventory.updateOne(
            {_id: req.params.inventoryId},
            { $set: { 
                name: req.body.name,
                quantity: req.body.quantity,
                description: req.body.description,
                itemPrice: req.body.itemPrice,
                discountPrice: req.body.discountPrice,
             } }
        );
        res.status(200).json(updatedInventory);
    }
    catch(err){
        res.status(500).json({message: err});
    }
})

//DELETE removes the specific inventory item
router.delete("/:inventoryId", async (req, res)=>{

    try{
        const removedInventory = await Inventory.deleteOne({_id: req.params.inventoryId});
        res.status(200).json(removedInventory);
    }
    catch(err){
        res.status(500).json({message: err});
    }

})


module.exports = router;
