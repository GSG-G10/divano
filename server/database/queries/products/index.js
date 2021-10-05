const connection = require('../../connection');
const getProductDetailsQuery = require('./getProductDetails');

const getProductsQuery = () => connection.query(

  'SELECT * FROM products;');

module.exports = {
  getProductsQuery, getProductDetailsQuery,
};
