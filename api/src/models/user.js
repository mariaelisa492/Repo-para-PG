const mongoose = require('mongoose');
const { Schema } = mongoose;

// User Schema
const UserSchema = new Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    username: {
        type: String,
        required: true, 
        unique: true
    },
    password: {
        type: String,
        required: true 
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    nacionality: {
        type: String
    },
    birthDate: {
        type: String
    },
    role: {
        type: String,
        default: 'ROLE_SELLER',
        enum: ['ROLE_SELLER', 'ROLE_ADMIN']
    },
    isActive: {
        type: Boolean,
        default:true
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
});

const Users = mongoose.model("User", UserSchema);
module.exports = Users;