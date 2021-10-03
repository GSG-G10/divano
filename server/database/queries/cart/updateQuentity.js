const connection = require('../../connection');

module.exports = (newQty, itemId) => connection.query('UPDATE cart_items SET quentity = $1 WHERE id = $2', [newQty, itemId]);
