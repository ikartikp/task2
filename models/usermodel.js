const mongoose=require("mongoose");
const plm =require("passport-local-mongoose");
const userschema= new mongoose.Schema({
    username:String,
    email:String,
    password:String,
  
})
userschema.plugin(plm)
const usermodel=mongoose.model("user",userschema)
module.exports=usermodel