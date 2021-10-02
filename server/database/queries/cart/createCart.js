const connection = require('../../connection');

module.exports = (userId) => connection.query('INSERT INTO cart (user_id, items_number) VALUES ($1, 0) RETURNING *', [userId]).then((data) => data.rows[0]);
