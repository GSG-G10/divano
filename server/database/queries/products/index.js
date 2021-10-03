const connection = require('../../connection');

const getProductsQuery = () => connection.query(
  'SELECT * FROM products WHERE id=$1');

module.exports = {
    getProductsQuery
}





