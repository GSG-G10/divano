const connection = require('../../connection');

module.exports = (newQty, itemId, userId) => connection.query(
  'UPDATE cart_items SET quentity = $1 WHERE product_id = $2 AND user_id = $3 RETURNING *',
  [newQty, itemId, userId],
);
