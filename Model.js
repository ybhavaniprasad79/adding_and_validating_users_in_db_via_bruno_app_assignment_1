const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    mail:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const Model=mongoose.model("Model",userSchema);

module.exports={Model}