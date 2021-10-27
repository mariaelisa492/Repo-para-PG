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
            error: 'Your reques could not be processed. try again'
        })

    }

 }
}
// -------------- WISH LIST
const addToWishList = async (req, res) => {
    const { email, productId } = req.body

    try {
      const user = await User.findOne({ 'email': { '$regex': email, $options: 'i' } });
      console.log('!!!!!!!!!! SOY USER', user)
      user.wishList = [...user.wishList, productId]
  
      await user.save()
  
      res.status(200).json({message: 'Producto guardado en favoritos'})
    } catch (error) {
      console.log("No se pudo guardar el producto en favoritos", error);
    }
};
  
const getWishList = async(req, res) => {
    const { email } = req.body
    console.log('EEEEEEEEEMAIL', email)
    const user = await User.findOne({ 'email': { '$regex': email, $options: 'i' } })
   
    res.json(user.wishList)
};
  
  const deleteWishItem = async (req, res) => {
    const {productId, email} = req.query
    console.log('EEEEEEEEEMAIL', email)

    const user = await User.findOne({ 'email': { '$regex': email, $options: 'i' } });
    console.log('EEEEEEEEEMAIL', user)
   
    user.wishList = user.wishList.filter(i => JSON.stringify(i) != JSON.stringify(productId))
  
    await user.save()
  
    res.status(200).json({msg: 'Item borrado'})
  }

module.exports = {
    createUser,
    findUser, 
    findAllUser,
    updateUser,
    addToWishList,
    getWishList,
    deleteWishItem
}