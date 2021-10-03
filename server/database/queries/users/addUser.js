const connection = require('../../connection');

const addUserQuery = ({ name, email, password }) => connection.query(
  'INSERT INTO user (name, email, password) VALUES ($1,$2,$3) RETURNING *',
  [name, email, password],
);

module.exports = {
  addUserQuery,
};
