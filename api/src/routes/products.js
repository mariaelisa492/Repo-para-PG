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

//borrar producto
router.delete('/:id', products.deleteProduct);

//crear muchos productos
router.post('/create-many', products.createManyProducts);

module.exports = router;