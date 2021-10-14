const { Router } = require('express');
const router = Router();
const products = require ('../controllers/products');

//obtener producto por nombre
router.get('/byName', products.getProductByName);

//obtener todos productos
router.get('/', products.productsAll);

//crear productos
router.post('/create', products.createProduct);

//obtener detalle del producto
router.get('/:id', products.getProduct);

//actualizar producto
router.put('/:id', products.updateProduct);

//obtener productos por orden de precio ascendente
router.get('/orderedByPriceAsc', products.orderedByPriceAsc)

//obtener productos por orden de precio descendente
router.get('/orderedByPriceDesc', products.orderedByPriceDesc)

module.exports = router;