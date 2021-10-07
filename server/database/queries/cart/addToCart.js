const connection = require('../../connection');

const addToCart = (userId, productId, quantity) => connection.query('INSERT INTO cart_items (user_id, product_id, quentity) VALUES ($1, $2, $3) RETURNING *', [userId, productId, quantity]).then((data) => data.rows[0]);

module.exports = addToCart;
