const connection = require('../../connection');

const getProductDetailsQuery = ({ id }) => connection.query(
  'SELECT * FROM products WHERE id=$1;', [id],
);

module.exports = getProductDetailsQuery;
