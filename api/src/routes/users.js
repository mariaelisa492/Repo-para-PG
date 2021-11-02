const { Router } = require('express');
const router = Router();
const users = require('../controllers/user')

//registrarse
router.post('/signup', users.createUser)


//logearse
router.post('/login', async(req, res) =>{
    try {
        
    } catch (error) {
        
    }
});

//todos los usuarios
router.get('/', users.findAllUser)
  

//obtener usuario
router.get('/:id', async(req, res) =>{
    try {
        
    } catch (error) {
        
    }
});

// actualizar usuario
router.put('/:id', users.updateUser)
    
// encontrar usuario
router.get('/user/:email', users.findUser)

// eliminar usuario
router.delete('/:id', users.deleteUser)

// hacer admin a un usuario
router.put('/makeAdmin/:id', users.makeAdmin)

// enviar mail de actualizacion de contraseña
router.post('/resetpass', users.requestPasswordReset)

// Wish List
router.post("/toggleWish", users.toggleWishList)
router.get("/wishlist/all", users.getWishList);

module.exports = router;
