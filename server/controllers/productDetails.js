const { getProductDetailsQuery } = require('../database/queries/products');

const productDetails = (req, res, next) => {
  const { id } = req.params;
  if (id > 0) {
    getProductDetailsQuery(id)
      .then((data) => res.json(data.rows))
      .catch((error) => next(error));
  } else {
    res.status(400)
      .json({ message: 'Bad request!' });
  }
};

module.exports = productDetails;
