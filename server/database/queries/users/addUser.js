const connection = require('../../connection');

const addUserQuery = (username, email, password) => connection.query(
  'INSERT INTO users (username, email, password) VALUES ($1,$2,$3) RETURNING *',
  [username, email, password],
);

module.exports = addUserQuery;
