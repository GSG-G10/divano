const { getProductDetailsQuery } = require('../database/queries/products');

const productDetails = (req, res, next) => {
  const { id } = req.body;
  if (id > 0) {
    getProductDetailsQuery(id)
      .then((data) => res.json(data.rows))
      .catch((error) => next(error));
  }
};

module.exports = productDetails;
