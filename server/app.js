const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const dotenv = require('dotenv');
const morgan = require('morgan');
const data= require("./routes/getdata")



dotenv.config()



mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true, useUnifiedTopology: true}, ()=>{
    
    console.log("connected to mangoDB")
    
});



app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))


app.use("/api", data)

app.listen(3001,()=>{
    console.log("running port 3001")
})