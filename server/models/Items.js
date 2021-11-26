const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    
    image:{
        type:String,
        require:true
    },
       
    item_name:{
        type:String,
        require:true
    },
       
    price:{
        type:String,
        require:false,
        min:3,
        max:20
    }, 
    category:{
        type:String,
        require:true
    }
    
    
},{timestamps:true})

module.exports=mongoose.model("items", UserSchema)