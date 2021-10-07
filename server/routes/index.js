const router = require('express').Router();
const {
  logout, getCart, login, productDetails, error404, serverError, signUp, getProducts,
} = require('../controllers');
const { authentication, signUpValidation } = require('../middlewares');

router.post('/signup', signUpValidation, signUp);
router.post('/login', login);
router.get('/product/:id', productDetails);
router.get('/products', getProducts);
router.get('/logout', logout);
router.get('/cart', authentication, getCart);
router.post('/cart', authentication, getCart);
router.use(error404);
router.use(serverError);

module.exports = router;
