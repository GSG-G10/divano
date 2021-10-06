const { getCart } = require('./pages');
const productDetails = require('./productDetails');
const { login, logout } = require('./auth');
const getProducts = require('./getProducts');

module.exports = {
  login,
  getProducts,
  logout,
  getCart,
  productDetails,
};
