const connection = require('../../connection');

module.exports = (cartId, productId) => connection.query('DELETE FROM cart_items WHERE cart_id = $1 AND product_id = $2 RETURNING *', [cartId, productId]);
