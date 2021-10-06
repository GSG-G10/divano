const router = require('express').Router();
const signupValidation = require('../middlewares');
const { signUp } = require('../controllers/auth/signup');
const {
  logout, getCart, login, productDetails,error404, serverError ,signUp,
} = require('../controllers');
const { authentication } = require('../middlewares');

router.post('/signup', signupValidation, signUp);
router.post('/login', login);
router.get('/product/:id', productDetails);
router.get('/logout', logout);
router.get('/cart', authentication, getCart);
router.use(error404);
router.use(serverError);

module.exports = router;