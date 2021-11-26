const router = require("express").Router();
const Items = require("../models/Items");




//get data
router.get("/getdata", async(req, res)=>{
    try{
    const data = await Items.find()
    res.status(200).json(data)
    }catch(err){
        return res.status(201).json(err)
    }
})


module.exports = router