const { Router } = require('express');
const ordersRoute = require('./orders');         //importando las rutas
const productsRoute = require('./products'); 
const usersRoute = require('./users');
const mailRoute = require('./mail');

const router = Router();

router.use("/users", usersRoute);   //aqui expongo las rutas 
router.use("/products", productsRoute); 
router.use("/orders", ordersRoute);   
router.use("/mail", mailRoute);

module.exports = router;
