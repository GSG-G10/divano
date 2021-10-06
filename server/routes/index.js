const router = require('express').Router();
const {
  logout, getCart, login, productDetails, error404, serverError, signUp,
} = require('../controllers');
const { authentication, signupValid } = require('../middlewares');

router.post('/signup', signupValid, signUp);
router.post('/login', login);
router.get('/product/:id', productDetails);
router.get('/logout', logout);
router.get('/cart', authentication, getCart);
router.post('/cart', authentication, getCart);
router.use(error404);
router.use(serverError);

module.exports = router;
