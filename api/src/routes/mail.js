const { Router } = require('express')
const router = Router()
const { sendMail, sendNewsletter, sendPromo, sendOrder } = require('../controllers/mail')

router.get('/wavemail', (req, res) => {
    return res.send('hello from wave music')
})

router.post('/wavemail', sendMail)    // this is just for testing mail service

router.post('/confirm', sendOrder)

router.post('/promo', sendPromo)

router.post('/newsletter', sendNewsletter)


module.exports = router
