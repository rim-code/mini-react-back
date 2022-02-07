const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({


    name: {
        type: String,
        required:true,
    },
    username: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    city: {
        type: String,
        required:true
    },
    street: {
        type: String,
        required:true
    }
    
   
    
     
}, { timestamps: true })

module.exports = new mongoose.model('user', UserSchema)