const { Router } = require('express');
const router = Router();
const orders = require('../controllers/orders')

//obtener todas las ordenes
router.get('/', orders.getAllOrders)

//obtener todas las ordenes de un vendedor
router.get('/userOrders', orders.getOrder)

//creo una orden
router.post('/create', orders.createOrder)
 

//actualizo orden
router.put('/:id', async(req, res) =>{
    try {
        
    } catch (error) {
        
    }
});

//actualizo orden
router.delete('/:id', async(req, res) =>{
    try {
        
    } catch (error) {
        
    }
});

module.exports = router;