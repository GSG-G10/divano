const connection = require('../../connection');

module.exports = (userId) => connection
  .query(
    'SELECT products.*, cart_items.quentity FROM products INNER JOIN cart_items ON cart_items.product_id=products.id INNER JOIN users ON cart_items.user_id = users.id WHERE cart_items.user_id = $1;',
    [userId],
  )
  .then((data) => data.rows);
