const mongoose=require("mongoose")
require("dotenv").config()

const connection=mongoose.connect(process.env.mongodb)
.then(()=>console.log("mongodb connection success"))
.catch((err)=>console.log(err))

module.exports={connection}
