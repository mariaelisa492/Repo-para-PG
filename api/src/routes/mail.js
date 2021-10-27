const { Router } = require('express')
const router = Router()
const { sendMail, sendNewsletter, sendPromo } = require('../controllers/mail')


router.post('/confirm', sendMail)

router.post('/promo', sendPromo)

router.post('/newletter', sendNewsletter)


module.exports = router
