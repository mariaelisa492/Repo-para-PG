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

const updateUser = async (req, res) => {
    const { id } = req.params;
    console.log(id, "el IDDDDDDDDD");
    const { firstName, lastName, gender, nacionality, birthDate, address} = req.body
    if (firstName || lastName  || gender || nacionality || birthDate || 
        address){
            // let oldUser = await User.find(id)
    try{
        const updateUser = { firstName , lastName, gender, nacionality, birthDate, address, _id: id }
        await User.findByIdAndUpdate(id, updateUser, {new: true});
        res.status(200).json(updateUser);
    }catch (error){
        console.log(error)
        res.status(400).json({
            error: 'Your reques could not be processed. try again'
        })

    }

 }
}
// -------------- WISH LIST
const addToWishList = async (req, res) => {
    const { producId } = req.body

    try {
      const user = await User.findById(req.body.idUser)
      user.wishList = [...user.wishList, producId]
  
      await user.save()
  
      res.status(200).json({message: 'Producto guardado en favoritos'})
    } catch (error) {
      console.log("No se pudo guardar el producto en favoritos");
    }
};
  
  const getWishList = async(req, res) => {
    
    const { id } = req.params
    
    const user = await User.findById(id).populate("wishList",
    { name: 1 }
    )
    res.json(user.wishList)
  };
  
  const deleteWishItem = async (req, res) => {
    const {itemid, usuarioid} = req.query
    const user = await User.findById(usuarioid)
   
    user.wishList = user.wishList.filter(i => JSON.stringify(i) != JSON.stringify(itemid))
  
    await user.save()
  
    res.status(200).json({msg: 'Item borrado'})
  
  }

module.exports = {
    createUser,
    findUser, 
    findAllUser,
    updateUser
}