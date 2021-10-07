const connection = require('../../connection');

const getUserQuery = (email, username) => connection.query('SELECT * FROM users WHERE email = $1 OR username = $2', [
  email, username,
]);

module.exports = getUserQuery;
