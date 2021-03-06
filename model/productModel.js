const mongoose= require('mongoose')
const {ObjectID}=mongoose.Schema


const productSchema = new mongoose.Schema({
    product_name:{
        type:String,
        required:true,
        trim:true,
    },
    product_price:{
        type:Number,
        required:true,
    },

    product_quantity:{
        type:Number,
        required:true,
    },

    product_description:{
        type:String,
        required: true,
    },

    category:{
        type: ObjectID,
        required:true,
        ref: 'Category'
    },

    product_rating:{
        tyepe: Number,
        default: 0,
        max: 5,
    },

    sold_quantity:{
        type:Number,
        default: 0,
    }

},{timestamp:true})

module.exports =mongoose.model('Product',productSchema)