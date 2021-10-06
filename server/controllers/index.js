const { getCart } = require('./pages');
const productDetails = require('./productDetails');
const { login, logout , signUp } = require('./auth');
const { error404, serverError } = require('./errors');
const getProducts = require('./getProducts');


module.exports = {
  login,
  getProducts,
  logout,
  getCart,
  productDetails,
  error404,
  serverError,
  signUp,
};
