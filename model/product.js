const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true,
        trim:true
    },
    slug:{
        type:String,
        required:true,
        trim:true
    },
    category:{
        type:String,
        required:true,
    },
    discription:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model('Product',productSchema);