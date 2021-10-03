const connection = require('../../connection');

const getProductsQuery = ({ id }) => connection.query(
  'SELECT * FROM products WHERE id=$1', [id]);

module.exports = {
    getProductsQuery,
}





