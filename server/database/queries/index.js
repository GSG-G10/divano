const { getUserQuery, addUserQuery } = require('./users');
const {
  getCartItems,
  addToCart,
  deleteFromCart,
  updateQuantity,
} = require('./cart');

module.exports = {
  getUserQuery,
  addUserQuery,
  getCartItems,
  addToCart,
  deleteFromCart,
  updateQuantity,
};
