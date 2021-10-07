const router = require('express').Router();
const {
  logout,
  getCart,
  login,
  productDetails,
  error404,
  serverError,
  signUp,
  getProducts,
  updateCartProduct,
  deleteCartProduct,
} = require('../controllers');
const { authentication, signUpValidation } = require('../middlewares');

router.post('/signup', signUpValidation, signUp);
router.post('/login', login);
router.get('/product/:id', productDetails);
router.get('/products', getProducts);
router.get('/logout', logout);
router.get('/cart', authentication, getCart);
router.put('/cart/products/:id', authentication, updateCartProduct);
router.delete('/cart/products/:id', authentication, deleteCartProduct);
router.use(error404);
router.use(serverError);

module.exports = router;
