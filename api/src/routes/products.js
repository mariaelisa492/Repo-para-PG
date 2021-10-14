const { Router } = require('express');
const router = Router();
const products = require ('../controllers/products');

//obtener producto por nombre
router.get('/byName', products.getProductByName);

//obtener todos productos
router.get('/', products.productsAll);

//crear productos
router.post('/create', products.createProduct);

//obtener productos por orden de precio ascendente
router.get('/orderedByPriceAsc', products.orderByPriceAsc);

//obtener productos por orden de precio descendente
router.get('/orderedByPriceDesc', products.orderByPriceDesc);

//obtener detalle del producto
router.get('/:id', products.getProduct);

//actualizar producto
router.put('/:id', products.updateProduct);

module.exports = router;