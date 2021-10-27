const { Router } = require("express");
const router = Router();
const { getAbout, createAbout, updateAbout } = require("../controllers/about");

// solo primera vez
router.post('/create', createAbout);

// get about
router.get('/about', getAbout);

// update about
router.put('/update', updateAbout);

module.exports = router;