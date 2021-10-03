const connection = require('../../connection');

const getUserQuery = (email, password) => connection.query('SELECT * FROM users WHERE email = $1 AND password = $2', [
  email,
  password,
]);

module.exports = {
  getUserQuery,
};
