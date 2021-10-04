const router = require('express').Router();
const { logout, serverError, productDetails } = require('../controllers');

router.get('/product/:id', productDetails);
router.get('/logout', logout);

router.use(serverError);

module.exports = router;
