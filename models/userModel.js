const mongoose = require('mongoose');

const userSchema =  mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique: true,
        lowercase:true,
        trim:true
    },
    mobile:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String,
        default:"operator"
    }
})

module.exports = User = mongoose.model("User" , userSchema);