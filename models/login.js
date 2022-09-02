const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,default:'admin'},
    createdAt: { type: Date, default: Date.now },
});


var adminModel = mongoose.model("admin", loginSchema);
module.exports = adminModel;
