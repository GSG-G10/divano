const { getCart } = require('./pages');
const productDetails = require('./productDetails');
const { login, logout , signUp } = require('./auth');
const { error404, serverError } = require('./errors');

module.exports = {
  login,
  logout,
  getCart,
  productDetails,
  error404,
  serverError,
  signUp,
};
