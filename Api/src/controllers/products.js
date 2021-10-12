const Products = require('../models/product');

const createProduct = async (req, res) => {
    //creamos el objeto producto
    let newProduct = new Products({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        price: req.body.price,
        stock: req.body.stock,
        sellerDocument: req.body.sellerDocument,
        isActive: req.body.isActive
    });
    console.log(newProduct)
    try {
        const product = await newProduct.save();
        res.status(200).json({
            message: "Added Succefulyl",   //agregado exitosamente
            product
        });
    } catch (error) {
        res.status(400).json({
            message: "Couldn't create please try again"
        });
    }
};

const productsAll = async (req, res) => {
    try {
        const productsAll = await Products.find();
        res.status(200).json(productsAll);
    } catch (error) {
        res.status(400).json({ 
            message: "Cannot get the products"
        });
    }
};

const getProduct= async (req, res) => { 
    const {id} = req.params;
    try {
        const productId = await Products.findById(id);
        res.status(200).json(productId);
    } catch (error) {
        res.status(404).json({ 
            message: "Cannot get the product"
        });
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, image, price, stock, sellerDocument, isActive } = req.body;
    try {
        const updateProduct = { name, description, image, price, stock, sellerDocument, isActive, _id:id }
        await Products.findByIdAndUpdate(id, updateProduct, { new: true });
        res.status(200).json(updateProduct);
    }catch (error) {
        res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
        })
    };
}   

module.exports = {
    createProduct,
    productsAll,
    getProduct,
    updateProduct
}