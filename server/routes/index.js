const router = require('express').Router();
const {
  logout, getCart, login, productDetails,
} = require('../controllers');
const { authentication } = require('../middlewares');
const { error404, serverError } = require('../controllers/errors');

router.post('/login', login);
router.get('/product/:id', productDetails);
router.get('/logout', logout);
router.get('/cart', authentication, getCart);

router.use(error404);
router.use(serverError);

module.exports = router;
