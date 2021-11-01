const Products = require('../models/product');

const createProduct = async (req, res) => {
    //creamos el objeto producto
    let newProduct = new Products({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        price: req.body.price,
        stock: req.body.stock,
        brand: req.body.brand,
        model: req.body.model,
        category: req.body.category,
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

const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const productId = await Products.findById(id);
        res.status(200).json(productId);
    } catch (error) {
        res.status(404).json({
            message: "Cannot get the product by Id"
        });
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, image, price, stock, brand, model, category } = req.body;
    try {
        const updateProduct = { name, description, image, price, stock, brand, model, category, _id: id }
        await Products.findByIdAndUpdate(id, updateProduct, { new: true });
        res.status(200).json(updateProduct);
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        })
    };
}

const getProductByName = async (req, res) => {
    const { name } = req.query;
    console.log(name)
    try {
        const products = await Products.find({ 'name': { '$regex': name, $options: 'i' } })
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({
            message: "Cannot get the product by name"
        });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const remove = await Products.findOneAndRemove({ _id: id });
        res.status(200).json({
            message: 'Successful',
            remove
        });
    }

    catch (error) {
        console.log(error)
        res.status(400).json({
            message: 'Your request could not be processed. Please try again.'
        })
    };
};

const createManyProducts = async (req, res) => {
    try {
        await Products.insertMany(req.body)
        res.status(200).json({
            message: 'Successful'
        });
    }

    catch {
        console.log(error)
        res.status(400).json({
            message: 'Your request could not be processed. Please try again.'
        })
    }
}

const createProductReview = async (req, res) => {
    const { id } = req.query;
    console.log(req.body, "EL BODYYYYYY")
    console.log(id, "EEEEEEL IDDDDD DEL REVIEW")
    const { review, rating, user, productrv } = req.body;
    const existUser = await Products.findById(id);

    const filterReviews = existUser.reviews.filter(review => review.user === user);

    if (filterReviews?.length > 0) {
        res.status(400).json({
            message: 'You have already reviewed this product'
        })
    }
    else {
        try {
            const newReview = { review, rating, user, productrv }
            console.log(newReview)
            const product = await Products.findById(id);
            product.reviews.push(newReview);
            await product.save();
            res.status(200).json({
                message: 'Successful',
                product
            });
        } catch (error) {
            res.status(400).json({
                message: 'Your request could not be processed. Please try again.'
            })

        }
    }
}

// ---------------------------- Questions 

const createProductQuestion = async (req, res) => {
    const { id } = req.params;
    const  question  = req.body;
    try {
        console.log(question, 'question in api')
        const product = await Products.findById(id);
        console.log(product, 'product')
        product.questions.push(question);
        await product.save();
        res.status(200).json({
            message: 'Successful',
            product
        });
    } catch (error) {
        res.status(400).json({
            message: 'Something went wrong while trying to post a question. Try again later.'
        })
    }
}

const getProductQuestions = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Products.findById(id);
        console.log('||||||||||||||',product.questions, 'product.questions', product.price, 'product.price','|||||||||')
        res.status(200).json(product.questions);
    } catch (error) {
        res.status(400).json({
            message: 'Something went wrong while trying to get the questions. Try again later.'
        })
    }
}

const getAllUnansweredQuestions = async (req, res) => {
    try {
        const questions = []
        const products = await Products.find({ 'questions.answer': 'No answer yet' })
        products.forEach(product => {
            product.questions.forEach(question => {
                if (question.answer === 'No answer yet') {
                    questions.push({question, questionFromProduct: product._id})
                }
            })
        })
        res.status(200).json(questions);
    } catch (error) {
        res.status(400).json({
            message: 'Something went wrong while trying to get the questions. Try again laterrrrrrrr.'
            , error
        })
    }
}

const answerQuestion = async (req, res) => {
    const {product} = req.query;
    const {question} = req.query;
    const {answer} = req.body;
    console.log(req.query, 'req query')
    console.log(req.body, 'req body')
    try {
        const productF = await Products.findById(product);
        // console.log(productF, 'productF')
        const questionFound = productF.questions.find(q => q._id == question)
        // console.log(questionFound, 'question found')
        questionFound.answer = answer;
        await productF.save();
        res.status(200).json({
            message: 'Successful',
            productF
        });

    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: 'Something went wrong while trying to answer the question. Try again later.',
            error
        })
    }
}

const removeStock = async (req, res) => {
    const { id } = req.params;
    const { qty } = req.body;
    try {
        const product = await Products.findById(id);
        product.stock = product.stock - qty;
        await product.save();
        res.status(200).json({
            message: 'Successful',
            product
        });
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: 'Something went wrong while trying to remove stock. Try again later.',
            error    
        })
    }
}

module.exports = {
    createProduct,
    productsAll,
    getProduct,
    updateProduct,
    getProductByName,
    deleteProduct,
    createManyProducts,
    createProductReview,
    createProductQuestion,
    getProductQuestions,
    getAllUnansweredQuestions,
    answerQuestion,
    removeStock
}