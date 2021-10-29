const { LEGAL_TCP_SOCKET_OPTIONS } = require('mongodb');
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


// -------------- WISH LIST

const toggleWishList = async (req, res) => {
    const {email, productId} = req.body
    try {
        const user = await User.findOne({ 'email': { '$regex': email, $options: 'i' } });

        let wish = [ ...user.wishList ]
        let flag = true;

        for (let i = 0; i < wish.length; ++i) {
          if (wish[i] == productId) {
            wish = wish.filter(id => id != productId);
            flag = false;
            break;
          }
        }

        if (flag) 
          wish.push(productId);

        user.wishList = wish;
        await user.save()
        return res.json(wish)
    } catch (e) {
        console.log('WISHLIST ROUTE Error', e)
        return res.json({Error: e})
    }
}
 
const getWishList = async(req, res) => {
    const { email } = req.query
    try {
    console.log('EEEEEEEEEMAIL', req.query)
    
    const user = await User.findOne({ 'email': { '$regex': email, $options: 'i' } })
    console.log('SOOOOOOOOOOOOOOOOY LOS WISHEs', user?.wishList)
    res.json(user?.wishList)
    } catch (error) {
        console.log('Error en acceder a la lista de deseos', error)
    }
};
  
module.exports = {
    createUser,
    findUser, 
    findAllUser,
    updateUser,
    deleteUser,
    makeAdmin,
    getWishList,
    toggleWishList
}