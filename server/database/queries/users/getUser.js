const connection = require('../../connection');

const getUserQuery = (email) => connection.query('SELECT * FROM users WHERE email = $1', [
  email,
]);

module.exports = getUserQuery;
