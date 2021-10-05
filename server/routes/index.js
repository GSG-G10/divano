const router = require('express').Router();
const { logout, getCart } = require('../controllers');
const { authentication } = require('../middlewares');

router.get('/logout', logout);
router.get('/cart', authentication, getCart);

module.exports = router;
