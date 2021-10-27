const mongoose = require("mongoose");
const { Schema } = mongoose;

const AboutSchema = new Schema({
    email: { 
        type: String, 
        required: true,
    },
    telephone: { 
        type: String, 
        required: true,
    },
    address: { 
        type: String, 
        required: true,
    },
    city: { 
        type: String, 
        required: true,
    },
    stateOrProvince: { 
        type: String, 
        required: true,
    },
    logo: {
        type: String, 
        required: true,
    }
});

const About = mongoose.model("About", AboutSchema);
module.exports = About;