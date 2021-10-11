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
    isActive: {
        type: Boolean,
        default: true
    },
    seller: { 
        type: Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;