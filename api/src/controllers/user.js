const User = require('../models/user');


const createUser = async (req, res) => {
    //creamos el objeto producto
    let { email, username} = req.body;
    if (email && username) {
         newUser = new User({
            email: email,
            username: username
        })}
    
    try {
        let user = await newUser.save();
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

const findUser = async (req,res) =>{
    let email = req.body
    if(email){
        try {
            let user = await User.find({email: email})
            res.status(200).json({
                message:'User found!',
                user
            })
        }
        catch (error){
            res.status(404).json({
                message: 'User not Found',
                error
            })
        }
    }
}
module.exports = {
    createUser,
    findUser
}