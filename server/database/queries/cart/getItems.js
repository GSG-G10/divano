const connection = require('../../connection');

module.exports = (productId, cartId) => connection.query('SELECT products.* FROM products INNER JOIN cart_item ON cart_item.product_id = $1 INNER JOIN cart ON cart_item.cart_id = $2 WHERE cart_item.product_id = products.id;', [productId, cartId]).then((data) => data.rows);
