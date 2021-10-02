const connection = require('../../connection');

module.exports = (cartId, productId, quantity) => connection.query('INSERT INTO cart_item (cart_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *', [cartId, productId, quantity]).then((data) => data.rows[0]);
