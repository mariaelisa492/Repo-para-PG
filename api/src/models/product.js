const mongoose = require("mongoose");
const { Schema } = mongoose;


const reviewSchema = mongoose.Schema(
    {
        review: { type: String, required: true },
        rating: { type: Number, required: true },
        user: { type: String, required: true },
        productrv: { type: String, required: true },
    },
    {
        timestamps: true
    }
);


const questionSchema = mongoose.Schema(
    {
        question: { type: String, required: true },
        answer: { type: String, required: true, default: "No answer yet" },
        user: { type: String, required: true },
    },
    {
        timestamps: true
    }
);

  

  


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
    },
    reviews: [reviewSchema],
    questions: [questionSchema],

});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;