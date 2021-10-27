const User = require('../models/user');


const createUser = async (req, res) => {
    //creamos el objeto producto
    let { email, username} = req.body;
    console.log(req.body)
    if (email && username ) {
         newUser = new User({
            email: email,
            username: username,          
        })
    }
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
    let {email} = req.params
    console.log(email)
    if(email){
        try {
            let user = await User.find({email: email});
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

const findAllUser = async (req, res) => {
    try{
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    }catch(error){
        console.log(error)
        res.status(400).json({
            message: "Cannot get users"
        })
    }
}

const makeAdmin = async (req, res) => {
    const {id} = req.params
    if(id){
        try {
            const user = await User.findByIdAndUpdate(id, {role:'ROLE_ADMIN'}, {new: true})
            res.status(200).json({
                message: 'User is now admin',
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

const updateUser = async (req, res) => {
    const { id } = req.params;
    console.log(id, "el IDDDDDDDDD");
    const { firstName, lastName, gender, nationality, birthDate, address} = req.body
    if (firstName || lastName  || gender || nationality || birthDate || 
        address){
            // let oldUser = await User.find(id)
    try{
        const updateUser = { firstName , lastName, gender, nationality, birthDate, address}
        await User.findByIdAndUpdate(id, updateUser, {new: true})
        .then(u => res.status(200).json(u)
       )
    }catch (error){
        console.log(error)
        res.status(400).json({
            error: 'Your request could not be processed. try again'
        })

    }

 }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try{
        await User.findByIdAndDelete(id)
        .then(u => res.status(200).json(
            {
            message: 'User deleted',
            deletedUser: u
            }
        )
    )
    }catch (error){
        console.log(error)
        res.status(400).json({
            error: "The user couldn't be deleted. Try again"
        })

    }
}




module.exports = {
    createUser,
    findUser, 
    findAllUser,
    updateUser,
    deleteUser,
    makeAdmin
}