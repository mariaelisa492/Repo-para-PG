const Order = require('../models/order');


const createOrder = async (req, res) => {
    //creamos el objeto producto
    let { user, items, quantity, totalPrice, status } = req.body;
    
         let newOrder = new Order({
            user: user,
            items: items,
            quantity: quantity,
            totalPrice: totalPrice,
            status: status           
        });
    
   
    try {
        const order = await newOrder.save();
        res.status(200).json({
            message: "Added Succefully",   //agregado exitosamente
            order
        });
    } catch (error) {
        res.status(400).json({
            message: "Couldn't create please try again"
        });
    }
};


const getAllOrders = async (req, res) => {
    try {
        const ordersAll = await Order.find();
        res.status(200).json(ordersAll);
    } catch (error) {
        res.status(400).json({ 
            message: "Cannot get the order"
        });
    }
};

const getOrder= async (req, res) => { 
    const {user} = req.body;
    try {
        const orderUser = await Order.find({user});
        res.status(200).json(orderUser);
    } catch (error) {
        console.log(error)
        res.status(404).json({ 
            message: "Cannot get the user orders"
        });
    }
};




module.exports = {
    createOrder,
    getAllOrders,
    getOrder
}