const { Router } = require("express");
const router = Router();
const { getAbout, createAbout, updateAbout } = require("../controllers/about");

// solo primera vez
router.post('/create', createAbout);

// get about
router.get('/', getAbout);

// update about
router.put('/update/:id', updateAbout);

module.exports = router;