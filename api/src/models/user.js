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
     firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    nationality: {
        type: String
    },
    birthDate: {
        type: String
    },
    address: {
        type: String
    },
    role: {
        type: String,
        default: 'ROLE_USER',
        enum: ['ROLE_USER', 'ROLE_ADMIN']
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