const { getUserQuery, addUserQuery } = require('./users');
const {
  getCartItems,
  addToCart,
  deleteFromCart,
  updateQuantity,
  getsingleItem,
} = require('./cart');

module.exports = {
  getUserQuery,
  addUserQuery,
  getCartItems,
  addToCart,
  getsingleItem,
  deleteFromCart,
  updateQuantity,
};
