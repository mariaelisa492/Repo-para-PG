const mongoose = require("mongoose");
const { Schema } = mongoose;

const AboutSchema = new Schema({
    email: { 
        type: String
    },
    telephone: { 
        type: String
    },
    address: { 
        type: String
    },
    city: { 
        type: String
    },
    stateOrProvince: { 
        type: String
    },
    logo: {
        type: String
    }
});

const About = mongoose.model("About", AboutSchema);
module.exports = About;