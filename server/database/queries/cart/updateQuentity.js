const connection = require('../../connection');

const updateQuantity = (itemId, userId) => connection.query('UPDATE cart_items SET quentity = quentity +1 WHERE product_id = $1 AND user_id = $2', [
  itemId,
  userId,
]);
module.exports = updateQuantity;
