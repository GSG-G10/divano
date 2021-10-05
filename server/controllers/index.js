const { getCart } = require('./pages');
const productDetails = require('./productDetails');
const { login, logout } = require('./auth');

module.exports = {
  login,
  logout,
  getCart,
  productDetails,
};
