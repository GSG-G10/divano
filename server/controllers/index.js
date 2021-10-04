const { login, logout } = require('./auth');
const getProducts = require('./getProducts');

module.exports = {
  login,
  getProducts,
  logout,
};
