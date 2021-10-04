const getProductQuery = require('../database/queries/products');

module.exports = (req, res, next) => {
  
    getProductQuery()
      .then((data) => res.json(data.rows))
      .catch((err) => next(err));
};
