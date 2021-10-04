const connection = require('../../connection');

const getProductsQuery = () => connection.query(
  'SELECT * FROM products ;');

module.exports = {
    getProductsQuery
};
