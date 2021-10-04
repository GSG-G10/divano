const {getProductsQuery} = require('../database/queries/products');

module.exports = (req, res, next) => {
  
  getProductsQuery()
      .then((data) => res.json(data.rows))
      .catch((err) => next(err));
};
