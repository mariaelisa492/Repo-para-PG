const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        type: String
    },
    stock: {
        type: Number,
        required: true 
    },
    price: {
        type: Number,
        required:true
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    },
    brand:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    }
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;