const { Router } = require('express');
const router = Router();
const users = require('../controllers/user')

//registrarse
router.post('/signup', users.createUser)
//     try {
        
//     } catch (error) {
        
//     }
// });

//logearse
router.post('/login', async(req, res) =>{
    try {
        
    } catch (error) {
        
    }
});

//todos los usuarios
router.get('/', async(req, res) =>{
    try {
        
    } catch (error) {
        
    }
});

//obtener usuario
router.get('/:id', async(req, res) =>{
    try {
        
    } catch (error) {
        
    }
});

//actualizar usuario
router.put('/:id', async(req, res) =>{
    try {
        
    } catch (error) {
        
    }
});

module.exports = router;