const User = require('../models/user');


const createUser = async (req, res) => {
    //creamos el objeto producto
    let newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        gender: req.body.gender,
        nacionality: req.body.nacionality,
        birthDate: req.body.birthdate,
    });
    console.log(newUser, "")
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