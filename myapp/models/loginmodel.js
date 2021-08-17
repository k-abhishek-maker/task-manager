const mongoose=require('mongoose')

const login= new mongoose.Schema({
    fullName:{
        type: String,
        required: true 
    },
    userName:{
        type: String,
        required: true 
    },
    position:{
        type: String,
        required: true 
    },
    login:{
        type: Boolean,
        default: false
    }

}) 
module.exports= mongoose.model('mytable',login)