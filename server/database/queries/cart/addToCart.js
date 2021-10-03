const connection = require('../../connection');

module.exports = (userId, productId, quantity) => connection.query('INSERT INTO cart_items (user_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *', [userId, productId, quantity]).then((data) => data.rows[0]);
