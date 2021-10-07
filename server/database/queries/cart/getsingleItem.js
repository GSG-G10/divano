const connection = require('../../connection');

const getsingleItem = (userId, productId) => connection.query('SELECT * FROM cart_items WHERE user_id = $1 AND product_id = $2 ', [userId, productId]);

module.exports = getsingleItem;
