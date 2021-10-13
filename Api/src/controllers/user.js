const User = require('../models/user');


const createUser = async (req, res) => {
    //creamos el objeto producto
    let { email, username, password, firstname, lastname, gender, nacionality, birthdate } = req.body;
    if (email && username && password && firstname && lastname && gender && nacionality && birthdate) 
         newUser = new User({
            email: email,
            username: username,
            password: password,
            firstName: firstname,
            lastName: lastname,
            gender: gender,
            nacionality: nacionality,
            birthDate: birthdate,
        });
    
   g
    try {
        const user = await newUser.save();
        res.status(200).json({
            message: "Added Succefully",   //agregado exitosamente
            user
        });
    } catch (error) {
        res.status(400).json({
            message: "Couldn't create please try again"
        });
    }
};

module.exports = {
    createUser
}